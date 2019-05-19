// localStorage.js

//setting group 1 values to localStorage  
var saveData = () => {
localStorage.setItem("gname1",document.getElementById("gname1").value);
localStorage.setItem("gid1",document.getElementById("gid1").value);
localStorage.setItem("food1",document.getElementById("food1").value);
localStorage.setItem("tip1",document.getElementById("tip1").value);
localStorage.setItem("discount1",document.getElementById("discount1").value);

//setting group 2 values to localStorage  
localStorage.setItem("gname2",document.getElementById("gname2").value);
localStorage.setItem("gid2",document.getElementById("gid2").value);
localStorage.setItem("food2",document.getElementById("food2").value);
localStorage.setItem("tip2",document.getElementById("tip2").value);
localStorage.setItem("discount2",document.getElementById("discount2").value);

//setting values for drop-down

//Reset options every time submit is clicked to prevent same values from being re-added.
document.getElementById("select").innerHTML = "<option>" + "Use down arrow to select a guest"+ "</option>" ;
document.getElementById("select").innerHTML += "<option>" + document.getElementById("gid1").value + "</option>" ;
document.getElementById("select").innerHTML += "<option>" + document.getElementById("gid2").value + "</option>" ;

}

//function to be executed when an option is selected from dropdown
var makeReport = () => {
	document.getElementById("outid").value = document.getElementById("select").value ;

	if( document.getElementById("outid").value == gid1.value){

		document.getElementById("outname").value = gname1.value;
		let final = ((parseInt(food1.value) + parseInt(tip1.value) - parseInt(discount1.value))*1.13) ;
		let total = final.toFixed(2);
		document.getElementById("outamount").value = total;
    }

	else if( document.getElementById("outid").value == gid2.value){

		document.getElementById("outname").value = gname2.value;
		let final = ((parseInt(food2.value) + parseInt(tip2.value) - parseInt(discount2.value))*1.13) ;
		let total = final.toFixed(2);
		document.getElementById("outamount").value = total;
		
	}

}

var printData = () => {
	window.print();
}
