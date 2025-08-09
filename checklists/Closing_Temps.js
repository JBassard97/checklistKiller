async function doClosingTemps(page, submitChecklist) {
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
}

module.exports = doClosingTemps;
