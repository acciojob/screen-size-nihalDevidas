//your JS code here. If required.



const eventHandler = ()=>{

	const ele1 = document.getElementById("s1");
	const ele2 = document.getElementById("s2");
	
	ele1.innerText = window.innerWidth;
	ele2.innerText = window.innerHeight;

}

const displayContent = ()=>{

	const divElement = document.createElement("div");
	
	const heading = `<h1 id="sizeInfo"> Width: <span id = s1>${window.innerWidth}</span> and Height: <span id = s2>${window.innerHeight}</span></h1>`;

    divElement.innerHTML= heading;
	document.body.appendChild(divElement);	
}

displayContent();


window.onresize = eventHandler;
