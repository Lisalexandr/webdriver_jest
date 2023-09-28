import { By } from "selenium-webdriver";
import { driver } from "../helpers/driver";

export const basePage = {
    elements: {
        searchInput: () => driver.findElement(By.id("sp-search-textfield")),
    },
    searchText: async function(text: string) {
        const searchInput = this.elements.searchInput()
        await searchInput.click()
        await searchInput.sendKeys(text)
        return await searchInput.getAttribute('value')
    }
}