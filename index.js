// variables declaration
const Container = document.querySelector(".squares");
let colors = ["pink", "white", "green", "blue", "purple", "orange"];
let colorsPicklist = [...colors, ...colors];
const squareCount = colorsPicklist.length;
let colorChange = document.getElementsByName("colors");


// create winner image
let winner = document.createElement("img");
winner.src= "winner2.gif";
winner.id = "resetImg";
winner.style.display = "none"; 
 document.body.appendChild(winner);

 // Create a header
 let header =document.createElement("header");
 header.id = "gameTitle";
 header.style.fontSize ="50px";
 header.style.color = "red";
 header.style.fontWeight ="bold" ;
 header.setAttribute("class", "bigHead");
 

 header.innerText = "Click me to change the text";
 document.body.prepend(header);

 //style  header (body firstchild)
 document.body.firstChild.style.fontStyle = "italic";
 document.body.firstChild.style.color= "blue"
 

 //event listener function

header.addEventListener("click",function(){

    // Text change on click
    header.innerText= "Can you guess the matching colors?"
})
// Game first step
let revealedCount = 0;
let activeSquare = null;
let awaitingEndOfMove = false;

//create  the squares couleurs
function buildSquare(color) {
	const element = document.createElement("div");

	element.classList.add("square");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

    // create events on click
	element.addEventListener("click", () => {
		const revealed = element.getAttribute("data-revealed");
        	if (
			awaitingEndOfMove
			|| revealed === "true"
			|| element == activeSquare
            ) 
        {
            return;
		}

		// Reveal  color
		element.style.backgroundColor = color;

		if (!activeSquare) {
			activeSquare = element;

			return;    
		}
        
        //check matching colors and leave them display

		let colorMatch = activeSquare.getAttribute("data-color");

		if (colorMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeSquare.setAttribute("data-revealed", "true");

			activeSquare = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
            
// winner display
			if (revealedCount === squareCount) {
                winner.style.display = "block";
				alert("Congratulation You win! ");

			}
        
			return;
		
        }
		awaitingEndOfMove = true;
        
// wrong color and timing display
		setTimeout(() => {
			activeSquare.style.backgroundColor = null;
			element.style.backgroundColor = null;
            alert ("Keep trying !!!!!!")
            awaitingEndOfMove = false;
			activeSquare= null;
		}, 800);
        
	});

	return element;
}

//  squares
for (let i = 0; i < squareCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const square = buildSquare(color);

	colorsPicklist.splice(randomIndex, 1);
	Container.appendChild(square);
}
// refresh window

function reset() {
let reset = window.location.reload ();


}
//document fragmentation
let fDoc= document.createDocumentFragment();;

let p = document.createElement("p");
p.id = "fragMe";
p.innerText = " Demain est un autre jour";
p.style.fontSize = "50px"
p.style.color="pink"
document.body.appendChild(fDoc);
fDoc.appendChild(p);
console.log (fDoc);

//registration
const login = document.getElementById("registration")
login.style.width = "1000px"




let email=document.getElementById("email");
let username =document.getElementById("username");
let password = document.getElementById("password");

    function validation(){
        if(email=="" || username =="" || password=="" )
        { alert("All field are required")}
    }
  submitSubscription.addEventListener("click",validation);{
		alert ("thank you for your subscription")
	}


const subsText = document.querySelector("p");
subsText.setAttribute("style", "color:green;fontSize:200px" )

 