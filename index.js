//
//**** Pseudocode for my btn *
//initialize count as 0
//listen  for clicks on the incremet btn
//increment the count variables when the btn is clicked
//change the count-el in the HTML to reflect the new count

let saveEl = document.getElementById('save-el');
 
let countEL = document.getElementById('count-el');
let count = 0;

console.log(countEL);

function increment(){

    count += 1;
    console.log(count);
    countEL.innerHTML = count;

}


//**save button */

function save(){

    let countStr = count + ' - ';
    saveEl.innerHTML += countStr;
    countEL.innerHTML = 0;
    count = 0;
   
  
}



