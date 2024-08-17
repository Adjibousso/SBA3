const tilesContainer = document.querySelector(".tiles");
const colors = ["pink", "white", "crimson", "blue", "dodgerblue", "gold"];
const colorsPicklist = [...colors, ...colors];
const squareCount = colorsPicklist.length;


// let noGif =document.createElement("img");
// mangue.src= "no.jpg";
// document.body.appendChild(no);

// let papaye =document.createElement("img");
// mangue.src= "papaye.jpg";
// document.body.appendChild(papaye);

// let litchi =document.createElement("img");
// mangue.src= "litchi.jpg";
// document.body.appendChild(litchi);

// let orange =document.createElement("img");
// mangue.src= "orange.jpg";
// document.body.appendChild(orange);

// let strawberry =document.createElement("img");
// mangue.src= "strawberry.jpg";
// document.body.appendChild(strawberry);

// let banana =document.createElement("img");
// mangue.src= "banana.jpg";
// document.body.appendChild(banana);

// let ditakh =document.createElement("img");
// mangue.src= "ditakh.jpg";
// document.body.appendChild(ditakh);

// let raisin =document.createElement("img");
// mangue.src= "raisin.jpg";
// document.body.appendChild(raisin);

// const tileCount = fruitsPicklist.length;

// Game state
let revealedCount = 13;
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
        
        

		const colorToMatch = activeSquare.getAttribute("data-color");

		if (colorToMatch === color) {
			element.setAttribute("data-revealed", "true");
			activeSquare.setAttribute("data-revealed", "true");

			activeSquare = null;
			awaitingEndOfMove = false;
			revealedCount += 2;
            

			if (revealedCount === squareCount) {
				alert("Congratulation You win! ");

			}
        
			return;
		
        }
		awaitingEndOfMove = true;
        

		setTimeout(() => {
			activeSquare.style.backgroundColor = null;
			element.style.backgroundColor = null;
            alert ("try again")

			awaitingEndOfMove = false;
			activeSquare= null;
		}, 900);
        
	});

	return element;
}

// Build up squares
for (let i = 0; i < squareCount; i++) {
	const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
	const color = colorsPicklist[randomIndex];
	const square = buildSquare(color);

	colorsPicklist.splice(randomIndex, 1);
	tilesContainer.appendChild(square);
}

