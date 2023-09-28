import { Builder } from "selenium-webdriver";

export let driver = new Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
