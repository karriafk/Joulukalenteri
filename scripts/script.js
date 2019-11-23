

// this list has all the images for the doors.
// what image is displayed is determied by its position in array
var images = [
"https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034_960_720.jpg", // luukku 2
"https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034_960_720.jpg", // luukku 1
"https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034_960_720.jpg", // luukku 24
"https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_960_720.jpg", // luukku 4
"https://cdn.pixabay.com/photo/2014/05/02/23/46/new-york-city-336475_960_720.jpg", // luukku 3
"https://cdn.pixabay.com/photo/2014/05/03/01/04/manhattan-336708_960_720.jpg", // luukku 5
"https://cdn.pixabay.com/photo/2014/12/15/13/57/city-569093_960_720.jpg", // luukku 6
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 7
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 8
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 9
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 10
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 11
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 12
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 13
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 14
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 15
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 16
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 17
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 18
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 19
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 20
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 21
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg", // luukku 22
"https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_960_720.jpg" // luukku 23
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

