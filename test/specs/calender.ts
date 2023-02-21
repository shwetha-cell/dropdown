import currentdate from "../pageobjects/currentdate.js";

describe("validating the current date", async () => {
  it("test1", async () => {
    await browser.url("https://demo.automationtesting.in/Datepicker.html");
    await browser.maximizeWindow();

    await currentdate.curentdates.click();
    await currentdate.clickDates.click();
    await currentdate.findDate();

    //  await currentdate.curentdates.setValue("01/25/2023");
    await browser.pause(4000);
  });
});
