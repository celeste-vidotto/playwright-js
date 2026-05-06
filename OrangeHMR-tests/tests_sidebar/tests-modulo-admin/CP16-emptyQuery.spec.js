  await page.getByRole('textbox').nth(1).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: '-- Select --' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
  await page.getByRole('option', { name: '-- Select --' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('(5) Records Found').click();