require("dotenv").config();
const { chromium } = require("playwright");

const doPepTest = require("./checklists/PEP_Test.js");
const doOpeningTemps = require("./checklists/Opening_Temp.js");
const doOpeningSani = require("./checklists/Opening_Sani.js");
const doOpeningOps = require("./checklists/Opening_Ops.js");
const doLunchTemps = require("./checklists/Lunch_Temps.js");
const doLunchSani = require("./checklists/Lunch_Sani.js");
const doPreRushOps = require("./checklists/Pre_Rush_Ops.js");
const doDinnerSani = require("./checklists/Dinner_Sani.js");
const doClosingTemps = require("./checklists/Closing_Temps.js");
const doClosingOps = require("./checklists/Closing_Ops.js");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const storeNumber = parseInt(process.env.STORE_NUMBER, 10);

(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://app.expandshare.com/login/");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="passwd"]', password);
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("link", { name: "Roadmap" }).nth(1).click();
  await page.getByRole("heading", { name: "Checklist" }).click();
  await page.click(".header__title.header__title__interactable");
  await page
    .getByRole("treeitem", { name: storeNumber.toString() })
    .locator("svg")
    .click();
  await page.getByRole("button", { name: "Done" }).click();

  const checkCompletion = async (checklistName = "Completion Status") => {
    try {
      const text = await page.locator(".progress-title h3").textContent();
      console.log(`${checklistName}:`, text);
      return text?.trim() === "Completed";
    } catch (err) {
      console.log(`${checklistName}: Incomplete`);
      return false;
    }
  };

  async function submitChecklist() {
    await sleep(1000);
    await page.getByRole("button", { name: "Submit" }).click();
    await sleep(1000);
    await page.getByRole("button", { name: "Continue" }).click();
    console.log("Complete!");
    await sleep(1000);
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // ? CHECKLIST PORTION

  const checklistNames = [
    "PEP Test",
    "Opening Temperature Checklist",
    "Opening Sanitization Checklist",
    "Opening Operations Checklist",
    "Lunch Temperature Checks",
    "Lunch Sanitization Checks",
    "Pre-Rush Operations Checks",
    "Dinner Sanitization Checks",
    "Closing Temperature Checks",
    "Closing Operations Checks",
  ];

  const checklistHandlers = {
    "PEP Test": doPepTest,
    "Opening Temperature Checklist": doOpeningTemps,
    "Opening Sanitization Checklist": doOpeningSani,
    "Opening Operations Checklist": doOpeningOps,
    "Lunch Temperature Checks": doLunchTemps,
    "Lunch Sanitization Checks": doLunchSani,
    "Pre-Rush Operations Checks": doPreRushOps,
    "Dinner Sanitization Checks": doDinnerSani,
    "Closing Temperature Checks": doClosingTemps,
    "Closing Operations Checks": doClosingOps,
  };

  console.log("Checklists for Store #", storeNumber);

  for (const name of checklistNames) {
    await page.getByRole("heading", { name }).click();
    const complete = await checkCompletion(name);
    if (complete) {
      await page.goBack();
    } else if (checklistHandlers[name]) {
      await checklistHandlers[name](page, submitChecklist);
    } else {
      console.log(`Skipping logic for ${name} (not yet implemented)`);
    }
  }

  await browser.close();
  console.log("Done");
})();
