var submit = document.getElementById('submit');

submit.onclick = tipCalculate;




function tipCalculate(){
  console.log("TIP CALCULATE");
  //the function that will run 
  //when the submit button is clicked
  //as defined in the inline javascript
  //on index.html
var totalBill = document.getElementById('bill').value;

console.log(totalBill);

if(!isNaN(totalBill)){ 

var tipAmount = (totalBill * tipPerc * 100);

var roundedamount =tipAmount.toFixed(2);

var tipBox = document.getElementById('tipamount');
tipBox.innerHTML = $ +roundedamount; 

function getPercChecked()

} else {alert("please enter numbers only")}

{


var tipBtns = document.getElementsByClassName('tip-btn');

for (var i=0 ; i < percBtns.length ; i++)

console.log(percBtns[i].checked);

if(percBtns[i].checked) {


	return percBtns[i].value;

}


}





