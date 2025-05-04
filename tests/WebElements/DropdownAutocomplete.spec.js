/**
 * @file DropdownAutocomplete.spec.js
 * @description This test script handles the interaction with a dropdown autocomplete component on a webpage. 
 * It searches for a specific value, iterates through the dropdown options, and selects the desired value.
 * The script demonstrates the use of Playwright locators and assertions for UI automation.
 */

//@ts-check

const {test, expect} = require("@playwright/test")

test('Handiling Dropdown List', async ({page}) => {

    const searchValue = "Ch"
    const selectValue = "China"

    await page.goto('https://alphagov.github.io/accessible-autocomplete/examples/');
    await page.locator('//input[@id="autocomplete-default"]').fill(searchValue, {timeout:1000});

    const dropdownData = page.locator('//ul[@id="autocomplete-default__listbox"]');
    const countValues = await dropdownData.count()

    for (let i=0; i<countValues; i++){
        const text = await dropdownData.nth(i).textContent();
        if(text===selectValue){
            await dropdownData.nth(i).click()
            break;
        }
    }
})