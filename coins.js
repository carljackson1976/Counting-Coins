/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
   var dollar1 = 1.00;
   var quarter1 = .25;
   var dime1 = .10;  
   var nickel1 = .05;
   var pennie1 = .01; 

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

   coinPurse.quarter1 = .0;
   coinPurse.dime1 = 0;
   coinPurse.nickel1 = 0;
   coinPurse.penny1 = 0;

  var dollarAmt = document.getElementById('dollarAmount');

  document.getElementById("button").addEventListener('click',function() {
    console.log("testing", dollarAmt.value);
    if (dollarAmt.value != "") {
       for (var i = dollarAmt.value; i >= .25; i-=.25) {
         coinPurse.quarter1++;
        }

       for (var i = dollarAmt.value; i >= .10; i-=.10) {
         coinPurse.dime1++;
        }

       for (var i = dollarAmt.value; i >= .05; i-=.05) {
         coinPurse.nickel1++; 
        }

       for (var i = dollarAmt.value; i >= .01; i-=.01) {
         coinPurse.penny1++; 
        }
    //if (coinPurse %2 != 1) {
      //console.log("coinPurse", coinPurse);
    //}



        //}coinPurse.nickel1 += 1;
       //coinPurse.penny1 += 1;

        


        //i%quarters
        console.log("counted", coinPurse);
      };
    // }
  })
  return coinPurse;

};





// if (dollarAmt != 0) {
//then(i = 0, i < dollarAmt.length, i++)
// console.log(helload)
//   coinPurse.quarters = 0;
//   coinPurse.dimes = 0;
//   coinPurse.nickels = 0;
//   coinPurse.pennies = 0;
 // };

// }

var coins = coinCounter()
console.log();