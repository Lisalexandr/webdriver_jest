import { By } from "selenium-webdriver";
import { driver } from "../helpers/driver";

export class BasePage {
    constructor() {
        global.driver = driver
    }
    async searchText(text: string) {
        const searchInput = driver.findElement(By.id("sp-search-textfield"))
        await searchInput.click()
        await searchInput.sendKeys(text)
        return (await searchInput.getAttribute('value'))
    }
}

