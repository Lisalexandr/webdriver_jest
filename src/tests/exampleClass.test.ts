import { hooks } from "../helpers/hooks";
import { searchTextExample } from "../helpers/static";
import { BasePage } from "../pages/basePageClass";

describe("Test suite example with Class", () => {
    let page = new BasePage

    beforeAll(async () => {
        await hooks.openPage()
    })
    afterAll(async () =>{
        await hooks.quit()
    })
    test("verify search textfield", async () => {        
        const text = await page.searchText(searchTextExample)
        expect(text).toEqual(searchTextExample) 
    })
})

