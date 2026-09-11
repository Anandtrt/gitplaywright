import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
    await page.goto(' https://www.hyrtutorials.com/p/calendar-practice.html');
    await page.locator(".ui-datepicker-trigger").click();

    let targetDay = "10";
    let targetMonth = "March";
    let targetYear = "2030";

    const monthPicker = await page.locator(".ui-datepicker-month");
    const yearPicker = await page.locator(".ui-datepicker-year");

    

});