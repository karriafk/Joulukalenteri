

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
//var currentday = 12;
var totaldays = new Date();
//var month = totaldays.getMonth();
var currentdays = totaldays.getDate();


function openDoor(doorid) {
//if doorid <= currentday then open the door {
//  if (currentdays == doorid - 1) {
      //return false;
//  }
//    else if (doorid > currentdays) {
//       return false; 
//    }
//    else if (doorid < totaldays.getDate()) {
//       return true; 
//    }
        
    //if (month < 10) //{
        
      //  return false;
    //}
    //else if (currentdays ) {
        
    //}


	// check if current day is the day passed to the function
	if (currentdays == doorid) {
		number = document.getElementById(doorid);
		number.innerHTML = "<img src=\'"+images[doorid]+"\' class=\'img-fluid mx-auto d-block\'>";
	}
    if (doorid < currentdays) {
        number1 = document.getElementById(doorid);
        number1.innerHTML = "<img src=\'"+images[doorid]+"\' class=\'img-fluid mx-auto d-block\'>";
    }
}

