import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('verify the title of the page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');

  await expect(page).toHaveURL(/playwright/);
});

// async-await is asynchronous programming concept in JavaScript. 
// It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier
//  to read and understand. 
// The async keyword is used to declare a function as asynchronous,
//  while the await keyword is used to pause the execution of the function until a Promise is resolved 
// or rejected.

test('verify login page with async-await', async function ({ page })  {

await page.goto('https://practicetestautomation.com/practice-test-login/');
await expect(page.locator('//h2[text()="Test login"]')).toHaveText('Test login');
await expect(page.getByText('Test login', { exact: true })).toBeVisible();
await expect(page.getByLabel('username')).toBeVisible();
// await page.locator('#username').fill('student');
// await page.fill('#username', 'student');
await page.type('#username', "student");
await page.locator('#password').fill('Password123');
await page.locator('#submit').click();
await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
await expect(page.locator('h1.post-title')).toHaveText('Logged In Successfully');
await expect(page.locator('#loop-container > div > article > div.post-content > div > div > div > a')).toHaveText('Log out');
// await page.locator('#loop-container > div > article > div.post-content > div > div > div > a').click();
await page.locator('//*[text()="Log out"]').click();

await expect(page.locator('#login > h2')).toHaveText('Test login');

})

test('verify login page with async-await1', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  const pageTitle = page.title();
  await expect(page).toHaveTitle('Test Login | Practice Test Automation');
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();

  await expect(page.getByText('Test login', { exact: true })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'username' }).fill('student');
  await expect(page.getByRole('textbox', { name: 'password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'password' }).fill('Password123');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
  await expect(page.locator('h1.post-title')).toHaveText('Logged In Successfully');
  await expect(page.locator('#loop-container > div > article > div.post-content > div > div > div > a')).toHaveText('Log out');
  await page.close();
})  