import multipleSelect from "../pageobjects/multipleSelect.js";
import filterpost from "../pageobjects/filterpost.js"
import autosearch from "../pageobjects/autosearch.js";

describe("Validating dropdown", async () => {
  it("dropdown1", async () => {
    await browser.url("https://semantic-ui.com/modules/dropdown.html");
    await browser.maximizeWindow();
    await browser.scroll(150, 50);
    await browser.pause(5000);

    let file = await $('//div[@class="ui dropdown"]');
    await file.waitForClickable();
    await file.click();
    await browser.pause(5000);

    // await $('(//i[@class="dropdown icon"])[6]').click();
    await $('(//div[contains(text(),"New")])[1]').click();
    await browser.scroll(100, 50);
    await $('(//div[@class="ui selection dropdown"])[1]').click();
    await browser.pause(5000);
    await $('//div[contains(text(),"Female")][1]').click();
    await browser.pause(5000);
  });

  it("Dropdown2", async () => {
    let name = await $('//div[contains(text(),"Select Country")][1]');
    await name.scrollIntoView();
    await name.click();
    //await name.setValue("in")

    await $('(//div[contains(text(),"Algeria")])[1]').click();
    await browser.pause(5000);
    await $('(//input[@class="search"])[2]').click();
    await $('(//div[contains(text(),"Arizona")])[1]').click();
    await browser.pause(5000);
  });
  it("validating multiple select", async () => {

   await multipleSelect.dropdown()
   await autosearch.searchCountry()
   await browser.pause(5000)

  // await filterpost.importtant()
  });
});




