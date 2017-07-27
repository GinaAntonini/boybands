console.log("hello world")

// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. 
// Ensure that each item is in a block element (e.g. li, div, p. etc...)

//The first thing to do is set the loop count to 5. 
//Next, we need to 

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var loopCount = 5;

var bandElement = document.getElementById("boy-bands"); //this identifies where in the html the band is going to go and defining a variable for it
var veggieElement = document.getElementById("vegetables"); //this identifies where in the html the vegetable is going to go and defining a variable for it//

for (var i = 0; i < loopCount; i++) { //first define i (initializer), next define how many times the loop will run, 
	//then define how many times it should increase, then i++ is the same as i = i + 1

	var domStringBand = ""; //gives a place for the band to be added into 
	var currentBand = bands[i]; 

  domStringBand += currentBand; //building the domString
  bandElement.innerHTML += '<li>' + domStringBand + '</li>'; //placed into div with innerHTML

  var domStringVegetable = "";
  var currentVegetable = vegetables[i];

  domStringVegetable += currentVegetable;
  veggieElement.innerHTML += '<li>' + domStringVegetable + '</li>';

}




