class filterpost {
  public get filerOne() {
    return $('(//input[@class="search"])[1]')
    
  }
  public get selctcountry(){
    return $('(//div[@class="default text"])[4]')
  }
  
  public async importtant(india:string) {
  // await  browser.switchToFrame(await this.iframe)
  // await this iframe.click()
    await this.filerOne.click()
    await this.selctcountry.setValue(india)

    

  }
}
export default new filterpost()
