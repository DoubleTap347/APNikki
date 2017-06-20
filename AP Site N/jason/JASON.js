// Javascript 
var jsondata= {
	"products":[
	{
		"productId": "001",
		"productName": "Oblivion",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "002",
		"productName": "Iron Man 3",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "003",
		"productName": "Monty Python's Meaning of Life",
		"productType": "Movie",
		"newRelease": false,
		"productPrice": 2.00
	},
	{
		"productId": "004",
		"productName": "Star Trek into Darkness",
		"productType": "Movie",
		"newRelease": true,
		"productPrice": 6.50
	},
	{
		"productId": "005",
		"productName": "iRobot",
		"productType": "Movie",
		"newRelease": false,
		"productPrice": 3.50
	},
	{
		"productId": "006",
		"productName": "Can't Hold Us (Macklemore)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.50
	},
	{
		"productId": "007",
		"productName": "Mirrors (Justin Timberlake)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.50
	},
	{
		"productId": "008",
		"productName": "Can't touch this (MC Hammer)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 1.50
	},
	{
		"productId": "009",
		"productName": "Spirit Got Lost (Mental as Anything)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 0.99
	},
	{
		"productId": "010",
		"productName": "Only Happy when it Rains (Garbage)",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 0.99
	},
	{
		"productId": "011",
		"productName": "Bangarang (Skrillex)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 2.50
	},
	{
		"productId": "012",
		"productName": "Splinter (Savant)",
		"productType": "Song",
		"newRelease": true,
		"productPrice": 3.00
	},
	{
		"productId": "001",
		"productName": "Oblivion",
		"productType": "Song",
		"newRelease": false,
		"productPrice": 6.50
	}
	]
}
//variable product is equal to jsondata. jsondata is equal to "products". Which is the name of the array which stores the information.
var product = jsondata["products"]

var totalArray = [];
var searchTotal = 0;
var total = 0;
	//create html elements.
	//div is like a section or area where other elements could be placed in.
	//We are putting a string "Quote" in the html div and then we are adding a new line to the document.
document.getElementById("jsonbtn").addEventListener("click", displayQuote);
function displayQuote() {
		var quote = document.createElement("div");
		quote.appendChild(document.createElement("br"));
		quote.appendChild(document.createTextNode("Here's your quote"));
		quote.appendChild(document.createElement("br"));
		
		// loop each quote in the array.
		quoteArray.forEach(function(i) {
			var productName = document.createTextNode(products[i.id]["productName"] + " ");
			var productCost = document.createElement("b");
			productCost.appendChild(document.createTextNode("$" + products[i.id]["productPrice"] +  " "));
			productCost.appendChild(document.createTextNode(" * " + i.count + " = $" + (products[i.id]["productPrice"] * i.count)));
			quote.appendChild(productName);
			quote.appendChild(document.createElement("br"));
			quote.appendChild(productCost);
			quote.appendChild(document.createElement("br"));
		});
		
		// display the total cost at the bottom.
		quote.appendChild(document.createElement("br"));
		var totalCost = document.createElement("b");
		totalCost.appendChild(document.createTextNode("Total: "));
		quote.appendChild(totalCost);
		quote.appendChild(document.createTextNode("$" +  total));
		
		document.getElementById("quote").removeChild(document.getElementById("quote").firstChild);
		document.getElementById("quote").appendChild(quote);
}

function main()
	{
		var products = jsondata["products"];
		document.getElementById("godzilla").innerHTML = products;
	}

theForm = document.theForm;

window.onload = init;
function init(){ }

function stop(){ //hammer time!
}