const Container = document.querySelector(".tiles");
const colors = ["pink", "white", "green", "blue", "purple", "gold"];
const colorsPicklist = [...colors, ...colors];
const squareCount = colorsPicklist.length;
let colorChange = document.getElementsByName("colors");


// let noGif =document.createElement("img");
// mangue.src= "no.jpg";
// document.body.appendChild(no);



let winner = document.createElement("img");
winner.src= "winner2.gif";
winner.id = "resetImg";
winner.style.display = "none"; 
 document.body.appendChild(winner);

 let header =document.createElement("header");
 header.id = "gameTitle";
 header.style.fontSize ="50px";
 header.style.color = "red";
 header.style.fontWeight ="bold" ;

 header.innerText = "Can you find the matching color";
 document.body.prepend(header);

 document.body.firstChild.style.fontStyle = "italic";
 document.body.firstChild.style.color= "blue"

// Game first step
let revealedCount = 0;
let activeSquare = null;
let awaitingEndOfMove = false;


function buildSquare(color) {
	const element = document.createElement("div");

	element.classList.add("square");
	element.setAttribute("data-color", color);
	element.setAttribute("data-revealed", "false");

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

		// Reveal this color
		element.style.backgroundColor = color;

		if (!activeSquare) {
			activeSquare = element;

			return;
            
		}
        
        

		let colorMatch = activeSquare.getAttribute("data-color");

		if (colorMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeSquare.setAttribute("data-revealed", "true");

			activeSquare = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
            

			if (revealedCount === squareCount) {
                winner.style.display = "block";
				alert("Congratulation You win! ");

			}
        
			return;
		
        }
		awaitingEndOfMove = true;
        

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

// Build up squares
for (let i = 0; i < squareCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const square = buildSquare(color);

	colorsPicklist.splice(randomIndex, 1);
	Container.appendChild(square);
}

function reset() {
let reset = window.location.reload ();


}
let fDoc= document.createDocumentFragment();;

let p = document.createElement("p");
p.id = "fragMe";
p.innerText = " Demain est un autre jour";
p.style.fontSize = "50px"
p.style.color="pink"
document.body.appendChild(fDoc);
fDoc.appendChild(p);

console.log (fDoc);

const login = document.getElementById("registration")
login.style.width = "1000px"



function confirmEmail(){
    let email=document.getElementById("email");
let username =document.getElementById("username");

    

    alert("thank you for your subscription")
    
    return;
}

const submitIt = document.getElementById("submitSubscription");
submitIt.addEventListener("click",confirmEmail);


let subscribe = document.getElementById("text")
subscribe.setAttribute( "style", "color:green; fontStyle:bold" );
subscribe.setAttribute("id", "text");

 
 







