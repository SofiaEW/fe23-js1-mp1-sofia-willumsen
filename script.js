const myText = ["Rad1", "Rad2", "Rad3", "Rad4", "Rad5", "Rad6"];
const mySize = [10, 15, 20, 25, 30, 35];

for (i = 0; i < 6; i++) {
	let myH3 = document.createElement("h3");
	document.body.appendChild(myH3);
	myH3.innerText = myText[i];

	let myHue = 161 + i * 6;
	myH3.style.backgroundColor = `hsl(${myHue}, 100%, 80%)`;
	myH3.style.textAlign = "center";
	myH3.style.color = "MediumPurple";

	myH3.style.fontSize = mySize[i] + "px";
}

const box = document.createElement("div");
box.setAttribute("id", "box");
box.style.overflow = "auto";
box.style.border = "5px solid black";
document.body.appendChild(box);

const div1 = document.createElement("div");
document.getElementById("box").append(div1);
const div2 = document.createElement("div");
document.getElementById("box").append(div2);
const div3 = document.createElement("div");
document.getElementById("box").append(div3);

let myColor = 263;

div1.style.margin = "2% 5% 2% 15%";
div1.style.width = "15%";
div1.style.cssFloat = "left";
div1.style.border = "8px solid hsl(" + myColor + ", 50%, 80%)";
div1.style.backgroundColor = "hsl(" + myColor + ", 50%, 80%)";

div2.style.margin = "2% 5% 2% 5%";
div2.style.width = "15%";
div2.style.cssFloat = "left";
div2.style.textAlign = "center";
div2.style.border = "8px solid hsl(" + myColor + ", 50%, 80%)";
div2.style.backgroundColor = "hsl(" + myColor + ", 50%, 80%)";

div3.style.margin = "2% 5% 2% 5%";
div3.style.width = "15%";
div3.style.cssFloat = "left";
div3.style.textAlign = "end";
div3.style.border = "8px solid hsl(" + myColor + ", 50%, 80%)";
div3.style.backgroundColor = "hsl(" + myColor + ", 50%, 80%)";

let myNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let myNumText = [
	"ett",
	"två",
	"tre",
	"fyra",
	"fem",
	"sex",
	"sju",
	"åtta",
	"nio",
	"tio",
];

div1.setAttribute("id", "div1");
div2.setAttribute("id", "div2");
div3.setAttribute("id", "div3");

function MakeMyList(myTargetDiv, myList, mySpecialNumber) {
	for (i = 0; i < 10; i++) {
		let myP = document.createElement("p");
		myP.innerText = myList[i];

		if (myTargetDiv == "div2") {
			document.getElementById(myTargetDiv).prepend(myP);
		} else {
			document.getElementById(myTargetDiv).append(myP);
		}

		myP.style.margin = "0px";

		if (i % 2 == 0) {
			myP.style.color = "white";
			myP.style.backgroundColor = "black";
		} else if (i % 1 == 0) {
			myP.style.color = "black";
			myP.style.backgroundColor = "white";
		}
		if (i == mySpecialNumber) {
			myP.style.backgroundColor = "hsl(" + myColor + ", 50%, 80%)";
		}
	}
}

MakeMyList("div1", myNum, 4);
MakeMyList("div2", myNum, 8);
MakeMyList("div3", myNumText, 5);
