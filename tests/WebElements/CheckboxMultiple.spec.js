/**
 * @file CheckboxMultiple.spec.js
 * @description This test script automates the handling of multiple checkboxes on a web page using Playwright. 
 * It demonstrates both generic and advanced methods to check and uncheck checkboxes, ensuring their states are validated.
 * The script also includes conditional unchecking of checkboxes to handle dynamic scenarios.
 */

// @ts-check

const{test, expect} = require("@playwright/test")

test('Handling Multiple Checkbox Button', async({page}) =>{

    await page.goto('https://demoqa.com/automation-practice-form');
    
    // Generic way to check multiple checkboxes
    const sportsCheckbox = page.getByText('Sports');
    const readingCheckbox = page.getByText('Reading');
    const musicCheckbox = page.getByText('Music');
    await sportsCheckbox.check();
    await readingCheckbox.check();
    await musicCheckbox.check();
    await expect(sportsCheckbox).toBeChecked();
    await expect(readingCheckbox).toBeChecked();
    await expect(musicCheckbox).toBeChecked();

    // Uncheck multiple checkboxes
    await sportsCheckbox.uncheck();
    await readingCheckbox.uncheck();
    await musicCheckbox.uncheck();
    await expect(sportsCheckbox).not.toBeChecked();
    await expect(readingCheckbox).not.toBeChecked();
    await expect(musicCheckbox).not.toBeChecked();

    // Advacned way to check multiple checkboxes
    const checkboxes = [ page.getByText('Sports'),
                         page.getByText('Reading'),
                         page.getByText('Music')
                        ];

    for (const checkbox of checkboxes) {
        await checkbox.check(); // Check the checkbox using locator
        await expect(checkbox).toBeChecked();
    }
    for (const checkbox of checkboxes) {
        if (await checkbox.isChecked()) {
            await checkbox.uncheck(); // Uncheck the checkbox using locator
        }
    }
})