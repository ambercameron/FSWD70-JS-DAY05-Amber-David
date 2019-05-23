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


var saleitems = {
	"shirts": [{
		"name": "Yeezy Shirt",
		"price": "£80",
		"imagesrc": "https://www.ctshirts.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw595709ff/hi-res/ACN0016WHT_a.jpg?sw=430&sh=540",
	}, {
		"name": "Nike Shirt",
		"price": "£45",
		"imagesrc": "http://www.bigwheeloffroad.com/images/rhydcountryhouse.co.uk/mens-nike-blue-white-royal-tshirt-swoosh-41LX.jpg",
	}, {
		"name": "New Balance Shirt",
		"price": "£30",
		"imagesrc": "https://nb.scene7.com/is/image/NB/mt81415bk_nb_40_i?$dw_pgp_hd$",
	}, {
		"name": "Puma Shirt",
		"price": "£40",
		"imagesrc": "https://static.keepersport.net/fileadmin/_processed_/a/b/csm_P703442-05-D1_ec9689e0f1.jpg",
	}]
}

var i = 0
	for (let i = 0; i < saleitems.shirts.length; i++) 
	{ 
		document.getElementById("visual").innerHTML += "<td><tr><td><b>Name</b></td><td>" + saleitems.shirts[i].name + 
		"</td></tr><tr><td><b>price</b></td><td>" + saleitems.shirts[i].price + 
		"</td></tr><tr><td><b>image</b></td><td><img src=" +  saleitems.shirts[i].imagesrc + "><button type=\"button\" class=\"cartbutton\">Add To Cart</button>"
		}

var btn = document.getElementsByClassName("cartbutton");
 for (let i = 0; i < btn.length; i++)
 {
 	btn[i].addEventListener("click",function(){addtocart(saleitems.shirts[i])},false)
 }
 var price = [];
var cartarray = [];
function addtocart(obj){
	cartarray.push(obj.name, "<br>");
	console.log(cartarray)
	var name1String = cartarray.toString().replace(/,/g," ");
	document.getElementById("one1").innerHTML = name1String + "Total<br>Tax<br>Incl.Total<br>Total after discount"
	price.push(obj.price, "<br>");
	console.log(price)
	var pricestring = price.toString().replace(/<br>/g, "").replace(/£/g, "").replace(/,,/g,"+");
	var nameString = price.toString().replace(/,/g," ");
	console.log(pricestring)
	var totalcost = eval(pricestring.slice(0, -1))
	console.log(totalcost)
		if (100 < totalcost * 1.22 < 200 ) {
		var discount = .93
	}
	else if (totalcost*1.22 > 200){
		var discount = .88
	}
	document.getElementById("price").innerHTML = nameString + "£" + totalcost + "<br> £" + totalcost*.22.toFixed(2) + "<br> £" + totalcost*1.22.toFixed(2) + "<br> £" + ((totalcost*1.22)*discount).toFixed(2)
	

} 








