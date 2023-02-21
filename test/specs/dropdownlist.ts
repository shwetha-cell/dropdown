describe("validating the list of dropdown", async () => {
  it("validatind autsuggesions", async () => {
    await browser.url("https://semantic-ui.com/modules/dropdown.html");

    await browser.maximizeWindow();
    let country = await $('(//input[@class="search"])[1]');
    await country.click();
    await country.setValue("india");

    let Click = await $(
      "//div[@class='menu transition visible']//div[@class='item selected']"
    );
    await Click.click();
    console.log(await Click.getText());
  });

  it("validating Language", async () => {
    let selectLan = await $('//span[contains(text(),"Select Language")]');

    await selectLan.click();

    selectLan.setValue("arbic");
    let arbic = await $('//div[@class="menu transition visible"]//div[@class="item selected"]'
    );
    await arbic.click();
    await browser.pause(3000)

  //  let shoping = await $('//span[contains(text(),"Shopping")]')

   // await shoping.click()

  });
});
