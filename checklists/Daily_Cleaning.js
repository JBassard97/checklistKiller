async function doDailyCleaning(page, checkCompletion, submitChecklist) {
  const today = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
  });
  // console.log("Today is:", today);

  await page
    .getByRole("heading", { name: `${today} Cleaning Checklist` })
    .click();

  const complete = await checkCompletion(`${today} Cleaning Checklist`);
  if (complete) {
    await page.goBack();
    return;
  }

  if (today === "Monday") {
    await page
      .locator('[id="101696"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101697"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101698"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101699"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101700"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101701"]')
      .getByRole("button", { name: "Yes" })
      .click();
  } else if (today === "Tuesday") {
    await page
      .locator('[id="101702"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101703"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101704"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101705"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101706"]')
      .getByRole("button", { name: "Yes" })
      .click();
  } else if (today === "Wednesday") {
    // TODO: Add Wednesday tasks
  } else if (today === "Thursday") {
    await page
      .locator('[id="101713"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101714"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101715"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101716"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101717"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101718"]')
      .getByRole("button", { name: "Yes" })
      .click();
  } else if (today === "Friday") {
    await page
      .locator('[id="101719"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101720"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101721"]')
      .getByRole("button", { name: "Yes" })
      .click();
  } else if (today === "Saturday") {
  } else if (today === "Sunday") {
    await page
      .locator('[id="101726"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101727"]')
      .getByRole("button", { name: "Yes" })
      .click();
    await page
      .locator('[id="101728"]')
      .getByRole("button", { name: "Yes" })
      .click();
  }

  await submitChecklist();
}

module.exports = doDailyCleaning;
