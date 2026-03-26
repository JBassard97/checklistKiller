const validTemp = require("../helpers.js");

async function doLunchTemps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page.locator('[id="53098"]').getByRole("textbox").fill("55");
  await page.locator('[id="53099"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53101"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53102"]').getByRole("textbox").fill(validTemp());
  await page
    .locator('[id="53103"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53104"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page.locator('[id="53105"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53106"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53107"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53108"]').getByRole("textbox").fill("0");
  await page.locator('[id="53109"]').getByRole("textbox").fill(validTemp());

  await submitChecklist();
}

module.exports = doLunchTemps;
