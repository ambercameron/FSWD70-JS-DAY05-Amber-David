function hide(a){
	console.log(a)
	if (document.getElementById(a).style.display = "none") {
	document.getElementById(a).style.display = "inline-block";
}
	else if (document.getElementById(a).style.display = "inline-block") {
		document.getElementById(a).style.display = "none";
}

}

function hidden1(a){
	console.log(a)
	if (document.getElementByClassName("div1")[a].style.display = "inline-block") {
	document.getElementByClassName("div1")[a].style.display = "none";
} 
	else if (document.getElementByClassName("div1")[a].style.display = "none") {
		document.getElementByClassName("div1")[a].style.display = "inline-block";
}


var btn = document.getElementsByClassName("btn");

for(let i = 0 ; i< btn.length; i++){
	btn[i].addEventListener("click",function(){hidden(i)},false);
}
}