import { driver } from "./driver";
import { baseUrl } from "../helpers/endpoints";

export const hooks = {
    openPage: async () => {
        await driver.get(baseUrl);
    },
    quit: async () => {
        await driver.quit();
    },
}