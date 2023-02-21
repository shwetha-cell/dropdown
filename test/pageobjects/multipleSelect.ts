class multipleSelect{
    public get selectdrop(){
 return $('(//div[contains(text(),"Skills")])[1]')
    }

    public get selectone(){
        return $('(//div[@class="item" and @data-value="angular"])[1]')
    }
public  get selcttwo(){
    return $('(//div[@class="item" and @data-value="html"])[1]')
}
    public async dropdown(){
        await this.selectdrop.click()
        await browser.pause(5000)

        await this.selectone.click()
        await await this.selcttwo.click()
        await browser.pause(5000)
     // await this.selectdrop.selectByAttribute('value','1')
      // await this.selectdrop.selectByVisibleText("CSS")
      



    }
}
export default new multipleSelect()