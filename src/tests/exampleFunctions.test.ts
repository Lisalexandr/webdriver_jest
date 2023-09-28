import { searchTextExample } from "../helpers/static";
import { basePage } from "../pages/basePageFunctional";
import { hooks } from "../helpers/hooks";

describe("Test suite example with functions", () => {
    beforeAll(async () => {
        await hooks.openPage()
    })
    afterAll(async () =>{
        await hooks.quit()
    })

    test("verify search textfield", async () => {        
        const text = await basePage.searchText(searchTextExample)
        expect(text).toEqual(searchTextExample) 
    })
})
