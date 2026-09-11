import { test, expect } from '@playwright/test';


test('screenshot of the page', async ({ page }) => {
   await page.goto(' https://testautomationpractice.blogspot.com/');
   //screenshot of the entire page
    await page.screenshot({ path: 'screenshot/test1.png' });
});

test('screenshot of an element', async ({ page }) => {
   await page.goto(' https://testautomationpractice.blogspot.com/');
    //screenshot of the specific element
    await page.getByPlaceholder("Enter Name").screenshot({path:"screenshot/test2.png" });
});

test('screenshot of the full page', async ({ page }) => {
   await page.goto(' https://testautomationpractice.blogspot.com/');
    //screenshot of fullpage
    await page.screenshot({ path: 'screenshot/test3.png', fullPage: true });
});