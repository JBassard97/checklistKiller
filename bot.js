require("dotenv").config();
const { chromium } = require("playwright");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const storeNumber = parseInt(process.env.STORE_NUMBER, 10);

const doughLogCount = 2;

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://app.expandshare.com/login/");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="passwd"]', password);
  await page.click(".btn.btn-primary");
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

  console.log("Checklists for Store #", storeNumber);

  for (const name of checklistNames) {
    await page.getByRole("heading", { name }).click();
    const complete = await checkCompletion(name);
    if (complete) {
      await page.goBack();
    } else if (name === "PEP Test") {
      await page.locator('[id="1"] span').first().click();
      await page.getByRole("textbox", { name: "Input Text" }).fill("5");
      await page.getByRole("spinbutton").fill("485");
      await page
        .locator('[id="53345"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53346"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53347"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53348"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53349"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53350"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="180253"]')
        .getByRole("button", { name: "Yes" })
        .click();

      await submitChecklist();
    } else if (name === "Opening Temperature Checklist") {
      await page.locator('[id="1"] span').first().click();
      await page.locator('[id="53442"]').getByRole("spinbutton").fill("55");
      await page.locator('[id="53443"]').getByRole("spinbutton").fill("38");
      await page.locator('[id="53445"]').getByRole("spinbutton").fill("37");
      await page.locator('[id="53446"]').getByRole("spinbutton").fill("36");
      await page
        .locator('[id="53447"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53448"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page.locator('[id="53449"]').getByRole("spinbutton").fill("37");
      await page.locator('[id="53450"]').getByRole("spinbutton").fill("36");
      await page.locator('[id="53451"]').getByRole("spinbutton").fill("35");
      await page.locator('[id="53452"]').getByRole("spinbutton").fill("0");
      await page.locator('[id="181121"]').getByRole("spinbutton").fill("38");

      await submitChecklist();
    } else if (name === "Opening Sanitization Checklist") {
      await page.locator('[id="1"] span').first().click();
      await page
        .locator('[id="181122"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53453"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53454"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53455"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53456"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53457"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53458"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53459"]')
        .getByRole("button", { name: "Yes" })
        .click();

      await submitChecklist();
    } else if (name === "Opening Operations Checklist") {
      await page.locator('[id="1"] span').first().click();
      await page
        .locator('[id="180257"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53460"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53461"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53462"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53463"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53464"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53465"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53466"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53467"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53468"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53469"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53470"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53471"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53472"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53473"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53474"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53475"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53477"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53478"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53479"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53480"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53481"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53482"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53483"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53484"]')
        .getByRole("button", { name: "N/A" })
        .click();

      await submitChecklist();
    } else if (name === "Lunch Temperature Checks") {
      await page.locator('[id="1"] span').first().click();
      await page.locator('[id="53098"]').getByRole("spinbutton").fill("55");
      await page.locator('[id="53099"]').getByRole("spinbutton").fill("38");
      await page.locator('[id="53101"]').getByRole("spinbutton").fill("37");
      await page.locator('[id="53102"]').getByRole("spinbutton").fill("35");
      await page
        .locator('[id="53103"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53104"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page.locator('[id="53105"]').getByRole("spinbutton").fill("38");
      await page.locator('[id="53106"]').getByRole("spinbutton").fill("37");
      await page.locator('[id="53107"]').getByRole("spinbutton").fill("35");
      await page.locator('[id="53108"]').getByRole("spinbutton").fill("0");
      await page.locator('[id="53109"]').getByRole("spinbutton").fill("38");

      await submitChecklist();
    } else if (name === "Lunch Sanitization Checks") {
      await page.locator('[id="1"] span').first().click();
      await page
        .locator('[id="180254"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53217"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53218"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53219"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53220"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53222"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53223"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53227"]')
        .getByRole("button", { name: "Yes" })
        .click();

      await submitChecklist();
    } else if (name === "Pre-Rush Operations Checks") {
      await page.locator('[id="1"] span').first().click();
      await page
        .locator('[id="53264"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53266"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53267"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53268"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53269"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53270"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53271"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53272"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53273"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53274"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53275"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53276"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53277"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53278"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53279"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53280"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53281"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53282"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53283"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53284"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53285"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53286"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53287"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53288"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53289"]')
        .getByRole("button", { name: "N/A" })
        .click();

      await submitChecklist();
    } else if (name === "Dinner Sanitization Checks") {
      await page.locator('[id="1"] span').first().click();
      await page
        .locator('[id="180255"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53232"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53233"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53235"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53236"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53237"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53238"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="195886"]')
        .getByRole("button", { name: "Yes" })
        .click();

      await submitChecklist();
    } else if (name === "Closing Temperature Checks") {
      await page.locator('[id="1"] span').first().click();
      await page.locator('[id="53243"]').getByRole("spinbutton").fill("55");
      await page.locator('[id="53247"]').getByRole("spinbutton").fill("39");
      await page.locator('[id="53250"]').getByRole("spinbutton").fill("38");
      await page.locator('[id="53251"]').getByRole("spinbutton").fill("37");
      await page
        .locator('[id="53252"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page
        .locator('[id="53253"]')
        .getByRole("button", { name: "N/A" })
        .click();
      await page.locator('[id="53254"]').getByRole("spinbutton").fill("38");
      await page.locator('[id="53255"]').getByRole("spinbutton").fill("37");
      await page.locator('[id="53256"]').getByRole("spinbutton").fill("36");
      await page.locator('[id="53257"]').getByRole("spinbutton").fill("0");
      await page.locator('[id="180256"]').getByRole("spinbutton").fill("36");

      await submitChecklist();
    } else if (name === "Closing Operations Checks") {
      await page
        .locator('[id="53291"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53292"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53293"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53294"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53295"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53296"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53297"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53298"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53299"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53300"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53301"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53302"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53303"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53305"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53306"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53307"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53308"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53309"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53310"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53311"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53312"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53313"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53314"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53315"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53316"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53317"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53318"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53319"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53320"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53321"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53322"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53323"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53324"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53325"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53326"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53327"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53328"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53329"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53330"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53331"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53332"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53333"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53334"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53335"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53336"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53337"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53338"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53339"]')
        .getByRole("button", { name: "Yes" })
        .click();
      await page
        .locator('[id="53340"]')
        .getByRole("button", { name: "Yes" })
        .click();

      await submitChecklist();
    } else {
      console.log(`Skipping logic for ${name} (not yet implemented)`);
    }
  }

  // await browser.close();
  console.log("Done");
})();
