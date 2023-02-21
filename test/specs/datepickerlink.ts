import calenderDate from "../pageobjects/calender.date.js";
describe('validating today date', async() => {

    it('test1',async () => {
        await browser.url("https://demo.automationtesting.in/Datepicker.html");
        await browser.maximizeWindow();
        await calenderDate.calenderclick.click(); //
        await browser.pause(5000); 
 

        console.log("newdate is",new Date().getDate()-1)
        console.log("newmonth is",new Date(12).getMonth()+1)
        console.log("new year",new Date().getFullYear())
        
     
        



      //let some= yesterday.setDate(yesterday.getDate() - 1)
      // await console.log(some)
        
// const yesterday = new Date(new Date(). setDate(new Date(). getDate() - 1));

// await console.log(yesterday)

// function getPreviousDay(date = new Date()) {
//     const previous = new Date(date.getTime());
//     previous.setDate(date.getDate() - 1);
  
//     return previous;
//   }
  
 //await console.log(getPreviousDay());

    });
});


    