import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
   await page.goto(' https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
  await page.locator('#PageList2').getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Udemy Courses' }).click();
  await page.getByText('Self-Paced Learning').click();
  await page.getByRole('heading', { name: 'Udemy Courses' }).click();
  await page.getByRole('img', { name: 'Playwright TS' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(3) > .udemy-content > .btn').click();
  const page1 = await page1Promise;
});
