import { test, expect } from '@playwright/test';

test('iframetest using codegen', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
    // await page.goto('https://demo.automationtesting.in/Frames.html');

      await page.getByRole('link', { name: 'SwitchTo' }).click();
      await page.getByRole('link', { name: 'Frames' }).click();

  //code by codegen
//   await page.locator('iframe[name="aswift_5"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().locator('div').filter({ hasText: 'iFrame Demo' }).click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('testing');
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('section')).toContainText('Nested iFrames <p>Your browser does not support iframes.</p>');
//code by codegen
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().locator('div').nth(1).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('nested frame');
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().locator('div').nth(1).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')).toHaveValue('nested frame');
});



test('verify iframe', async function ({ page })  {
//   await page.goto('https://demo.automationtesting.in/Windows.html');
      await page.goto('https://demo.automationtesting.in/Frames.html');

//   await page.getByRole('link', { name: 'SwitchTo' }).click();
//   await page.getByRole('link', { name: 'Frames' }).click();

const framepage  = await page.frameLocator('iframe[name="SingleFrame"]');
await framepage.getByRole('textbox').fill('frame by anand');
await expect(framepage.locator("[type='textbox']").first()).toHaveValue('frame by anand');

//code to verify Nested iFrame by Anand
await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
//   await page.locator('iframe[name="aswift_5"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();

  await page.getByText("Iframe with in an Iframe", { exact: true }).click();

const outerframepage  = page.frameLocator("#Multiple iframe");
const innerframepage  = outerframepage.frameLocator(".iframe-container iframe");
// const nestedframepage  = page.frameLocator('#Multiple').frameLocator('iframe');
//   await nestedframepage.getByRole('textbox', { name: 'Nested iFrame textbox' }).click();

await innerframepage.locator("[type='text']").first().fill('nested frame by anand');
await expect(innerframepage.getByRole('textbox')).toHaveValue('nested frame by anand');


});