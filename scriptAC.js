// Basic 01
var sandwiches = {
	"sandwich": "hamburger",
	"calories": "260" 
};

var fries = { 
	"fries_size": "Large French Fries", 
	"calories": "570" 
};

document.getElementById("basic01").innerHTML = "My favorite sandwich is a " + sandwiches.sandwich + " which has approximately " + sandwiches.calories + " calories, along with it I enjoy eating " + fries.fries_size + " which have about " + fries.calories + " calories."

//Intermediate 01

var employees = {
	"dunder_mifflin": [{
		"unique_id": "0001",
		"first_name": "Michael",
		"second_name": "Scott",
		"email_address": "michael@dm.com",
		"job_title": "Regional Manager",
		"salary": "$60,000",
	}, {
		"unique_id": "0002",
		"first_name": "Dwight",
		"second_name": "Schrute",
		"email_address": "dwight@dm.com",
		"job_title": "Assistant to the Regional Manager",
		"salary": "$40,000",
	}, {
		"unique_id": "003",
		"first_name": "Jim",
		"second_name": "Halpert",
		"email_address": "jim@dm.com",
		"job_title": "Salesman",
		"salary": "$40,000",
	}, {
		"unique_id": "004",
		"first_name": "Pam",
		"second_name": "Beesly",
		"email_address": "pam@dm.com",
		"job_title": "Receptionist",
		"salary": "$25,000",
	}, {
		"unique_id": "005",
		"first_name": "Ryan",
		"second_name": "Howard",
		"email_address": "ryan@dm.com",
		"job_title": "Temp",
		"salary": "$25,000",
	}, {
		"unique_id": "006",
		"first_name": "Angela",
		"second_name": "Martin",
		"email_address": "angela@dm.com",
		"job_title": "Accounting",
		"salary": "$35,000",
	}, {
		"unique_id": "007",
		"first_name": "Kevin",
		"second_name": "Malone",
		"email_address": "kevin@dm.com",
		"job_title": "Accounting",
		"salary": "$35,000",
	}, {
		"unique_id": "008",
		"first_name": "Oscar",
		"second_name": "Martinez",
		"email_address": "oscar@dm.com",
		"job_title": "Accounting",
		"salary": "$40,000",
	}, {
		"unique_id": "009",
		"first_name": "Creed",
		"second_name": "Bratton",
		"email_address": "creed@dm.com",
		"job_title": "Quality Assurance",
		"salary": "$35,000",
	}, {
		"unique_id": "010",
		"first_name": "Toby",
		"second_name": "Flenderson",
		"email_address": "toby@dm.com",
		"job_title": "HR",
		"salary": "$40,000",
	}]
}

	var i = 0
	for (i = 0; i < employees.dunder_mifflin.length; i++) 
	{ 
		document.getElementById("inter01").innerHTML += "<td><table border='1' width=200 ><tr><td><b>Employee Number</b></td><td width=100>" + employees.dunder_mifflin[i].unique_id + 
		"</td></tr><tr><td><b>First Name</b></td><td width=100>" + employees.dunder_mifflin[i].first_name + 
		"</td></tr><tr><td><b>Second Name</b></td><td width=100>" + employees.dunder_mifflin[i].second_name + 
		"</td></tr><tr><td><b>email_address</b></td><td width=100>" + employees.dunder_mifflin[i].email_address + 
		"</td></tr><tr><td><b>job_title</b></td><td width=100>" + employees.dunder_mifflin[i].job_title + 
		"</td></tr><tr><td><b>salary</b></td><td width=100>" + employees.dunder_mifflin[i].salary + "</td></tr></table></td><br>"}
