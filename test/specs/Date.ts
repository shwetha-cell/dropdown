import calenderDate from "../pageobjects/calender.date.js";
import currentdate from "../pageobjects/currentdate.js";

describe("validating the date", async () => {
  it("test1", async () => {
    await browser.url("https://demo.automationtesting.in/Datepicker.html");
    await browser.maximizeWindow();
    await calenderDate.calenderclick.click(); //
    await browser.pause(5000);
    const currentdate = new Date().getDate();
    console.log("currentdate", +currentdate);

    const nxt = new Date().getDate() + 1;
    console.log("date:::", +nxt);

    (await calenderDate.calenderMonth(calenderDate.getNextDay())).click();
    browser.pause(5000);
   

   
  });
});
