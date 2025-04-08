//@ts-check

const {test, expect} = require("@playwright/test")

test('Handiling Dropdown List', async ({page}) => {

    const searchValue = "Bl"
    const selectValue = "Black"

    await page.goto('https://demoqa.com/auto-complete');
    await page.locator('//div[@class="auto-complete__value-container auto-complete__value-container--is-multi css-1hwfws3"]').type(searchValue, {delay:100})

    const dropdownData = page.locator('') //Need data here
    const countValues = await values.count()

    for (let i=0; i<countValues; i++){
        const text = await values.nth(i).textContent();
        if(text===selectValue){
            await values.nth(i).click()
            break;
        }
    }

    await page.waitForTimeout(10000);
})