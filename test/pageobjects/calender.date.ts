class calenderdate {
  public get calenderclick() {
    return $('//img[@class="imgdp"]');
  }

 public async calenderMonth(date: string) {
    let date_ele = `//a[text()='${date}']`;
    return $(date_ele);

   
  }
 public async calenderPrev(date:string){
    let date_bef =`(//td[@data-month="0"])//a[text()='${date}']`;
    return $(date_bef)
 }
   public getNextDay() {
    const nxtdate = new Date().getDate() + 10; //2
    return nxtdate.toString()

   

 // }


   }
}
export default new calenderdate();
