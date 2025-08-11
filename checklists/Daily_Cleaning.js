async function doDailyCleaning(page, submitChecklist) {
  const today = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
  });
  console.log("Today is:", today);

  await page
    .getByRole("heading", { name: `${today} Cleaning Checklist` })
    .click();
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
