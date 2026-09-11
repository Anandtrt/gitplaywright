 import { test, expect } from '@playwright/test';

// test('testing radio buttons and checkboxes', async ({ page }) => {
//    await page.goto('https://testautomationpractice.blogspot.com')

//    //Radio button
// await page.getByRole("radio", { name: 'Female' }).click();
// await expect(page.getByRole("radio", { name: "Female" })).toBeChecked();

// await page.waitForTimeout(2000);

// // await page.getByRole("radio", { name: 'Male' }).click();
// // await expect(page.getByRole("radio", { name: "Male" })).toBeChecked();

// // Checkbox
// await page.getByRole("checkbox", { name: "Sunday" }).check();
// await expect(page.getByRole("checkbox", { name: "Sunday" })).toBeChecked();
// //Uncheck the checkbox
// await (page.getByRole("checkbox", { name: "Sunday" })).uncheck();   
// await expect(page.getByRole("checkbox", { name: "Sunday" })).not.toBeChecked();

// // Dropdown
// //1. static dropdown - value in the list is fixed and we can select the value by using selectOption method
// //single select dropdown
// await page.getByRole("combobox", { name: "country" }).selectOption("India");
// // await expect(page.getByRole("combobox", { name: "country" })).toHaveValue("India");

// //OR
// const countryDropdown = page.locator("#country");
// await countryDropdown.selectOption("India");
// await expect(countryDropdown).toHaveValue("india");

// //OR
// await countryDropdown.selectOption({ label: "Brazil" });
// //OR
// await countryDropdown.selectOption({ value: "china" });
// //OR
// await countryDropdown.selectOption({ index: 6 });


// //multi select dropdown
// // await page.getByRole("combobox", { name: "colors" }).selectOption(["Red", "Blue"]);
// // await expect(page.getByRole("combobox", { name: "colors" })).toHaveValues(["Red", "Blue"]);

// //OR
// await page.waitForTimeout(2000);
// const colorsDropdown = page.locator("#colors");
// await colorsDropdown.selectOption(["Red", "Green"]);
// await expect(colorsDropdown).toHaveValues(["red", "green"]); 
// await page.waitForTimeout(2000);

// //2. dynamic dropdown - value in the list is not fixed and we can select the value by using click method    

// // await page.getByRole("combobox", { name: "Select a country" }).click();
// // await page.getByRole("option", { name: "India" }).click();
// // await expect(page.getByRole("combobox", { name: "Select a country" })).toHaveValue("India");

// })

// //drag and drop using dragAndDrop method dragAndDrop method is used to drag an element 
// //  and drop it to another element. It takes two arguments, the source element and the target element. 
// // The source element is the element that we want to drag, and the target element is the element where we want to drop the source element.  
// // drag and drop using mouse events drag and drop using mouse events is used to drag an element and drop it to another element. It uses the mouse events to perform the drag and drop action. The mouse events are mousedown, mousemove, and mouseup. The mousedown event is used to press the mouse button on the source element. The mousemove event is used to move the source element to the target element. The mouseup event is used to release the mouse button on the target element.      

// // Drag and drop using dragAndDrop method


// test('practicals', async ({ page }) => {
//    await page.goto('https://testautomationpractice.blogspot.com')

//     await page.getByRole("textbox", { name: "Username" }).fill("student");
//     await expect(page.getByRole("textbox", { name: "Username" })).toHaveValue("student");
//     await page.getByLabel("Password").pressSequentially("Password123");
//     await expect(page.getByLabel("Password")).toHaveValue("Password123");
//     await page.getByText("Submit",{exact: true}).first().click();
// //toHaveText("Exact Text")
// //toContainText("Partial Text")
// //toHaveValue("Exact Value")
// //toContainValue("Partial Value")
// //toBeVisible()
// //toBeHidden()
// //toBeChecked()
// //toBeDisabled()
// //toBeEnabled()
// //toBeFocused()
// //toBeEditable()
// //toBeEmpty()

// await expect(page.locator("h1.post-title")).toContainText("Successfully");



// })


test('alters', async ({ page }) => {
   await page.goto('https://demoqa.com/alerts')

   const prompt = "Prompt"
page.on('dialog', async dialog => {
   console.log(`Dialog message: ${dialog.message()}`);// display the text message on dialog
//    await expect(dialog.message()).toContain("Do you confirm event?");//verify the text message on dialog
   await dialog.accept("Prompt");//ok or submit or yes button
 })


await page.locator("#alertButton").click();
await page.waitForTimeout(2000);

await page.locator("#confirmButton").click();

await page.locator("#promtButton").click();
await expect(page.locator("#promptResult")).toContainText(`You entered ${prompt}`);
// await expect(page.locator("#confirmResult")).toContainText("You selected Ok");
})


test("multiple windows", async ({ page}) => {
 await page.goto("https://demo.automationtesting.in/Windows.html");
 await page.locator("#Tabbed a").click();
 await page.waitForTimeout(2000);
 const [newPage] = await Promise.all([
   page.waitForEvent("popup"),
   page.locator("#Tabbed a").click()
 ]);
 await newPage.waitForLoadState();
 await expect(newPage).toHaveTitle("Selenium"); 

})

test('Handle multiple tabs', async ({ page }) => {
 await page.goto("https://demo.automationtesting.in/Windows.html");
         const newPage1 = page.waitForEvent('popup');

        await page.locator("#Tabbed a").click();
                const newPage = await newPage1;
                await newPage.waitForLoadState();
                await expect(newPage).toHaveTitle("Selenium");
               await newPage.getByText("Download", { exact: true }).click();
               await expect(newPage).toHaveURL("https://www.selenium.dev/downloads/");
               await expect(newPage.locator("#binding")).toBeVisible();
               await newPage.close();
               await page.bringToFront();
               await expect(page).toHaveTitle("Frames & windows");
   })