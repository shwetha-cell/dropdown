

class currentdate{
public get curentdates(){
    return $('//input[@id="datepicker1"]')
}
public get clickDates(){
    return $ ('//td//a[@class="ui-state-default ui-state-highlight ui-state-hover"]')
}
public get alldate(){
    return  $$('//table//td[@data-month="0"]')
}
public async findDate(){
//let currentDateToday='//td//a[@class="ui-state-default ui-state-highlight ui-state-hover"]'
   let valeDate = await this.clickDates.getText()
   console.log(await "value of today date is", +valeDate)


 
   
  

    
}

   }


export default new currentdate()