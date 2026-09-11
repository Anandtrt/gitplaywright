//codegen - code generation test
// how to open codegen in vscode: ctrl+shift+p -> codegen: open codegen panel

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('#checkbox1').check();
  await page.locator('#checkbox2').check();
  await page.locator('#checkbox3').check();
  await page.locator('#Skills').selectOption('Android');
  await page.locator('.select2-selection__arrow').click();
  await page.getByRole('treeitem', { name: 'Bangladesh' }).click();
  await page.locator('#yearbox').selectOption('1934');
  await page.getByRole('combobox').nth(4).selectOption('November');
  await page.locator('#daybox').selectOption('14');
  await expect(page.locator('h1')).toContainText('Automation Demo');


});

