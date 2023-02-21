class autosearch{

    public get searchBox(){
        return $('//div[@class="ui fluid multiple search selection dropdown"]')
    }
   // public get searchEle(){
   //     return $('(//input[@name="country"])[2]')
   // }
public async searchCountry()
{
    await   this.searchBox.click()

    await this.searchBox.setValue("india")
}
}
export default new autosearch()