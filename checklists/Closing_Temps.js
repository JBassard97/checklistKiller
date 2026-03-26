const validTemp = require("../helpers.js");

async function doClosingTemps(page, submitChecklist) {
  await page.locator('[id="1"] span').first().click();
  await page.locator('[id="53243"]').getByRole("textbox").fill("55");
  await page.locator('[id="53247"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53250"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53251"]').getByRole("textbox").fill(validTemp());
  await page
    .locator('[id="53252"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page
    .locator('[id="53253"]')
    .getByRole("button", { name: "N/A" })
    .click();
  await page.locator('[id="53254"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53255"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53256"]').getByRole("textbox").fill(validTemp());
  await page.locator('[id="53257"]').getByRole("textbox").fill("0");
  await page.locator('[id="180256"]').getByRole("textbox").fill(validTemp());

  await submitChecklist();
}

module.exports = doClosingTemps;
