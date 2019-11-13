

// this list has all the images for the doors.
// what image is displayed is determied by its position in array
var images = [
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku",
"https://via.placeholder.com/350x350?text=luukku"
]; 

// variable for controlling current day.. Think how many days is left for 24th day..
var currentday = 24;

function openDoor(doorid) {
//if doorid <= currentday then open the door {
//    
//}
	// check if current day is the day passed to the function
	if (currentday == doorid) {
		// get door and replace all of its content with image
		number = document.getElementById("door"+doorid);
		number.innerHTML = "<img src=\'"+images[doorid]+"\' class=\'img-fluid mx-auto d-block\'>";
	} else {
		//if bad security check failed run this code
		window.location.href = "https://ak6.picdn.net/shutterstock/videos/1035943766/thumb/3.jpg";
	}

}

