//var currentday = 12;
var totaldays = new Date();
//var month = totaldays.getMonth();
var currentdays = totaldays.getDate();
var currentday = 10;
var i =0;
while (i < 24) {
    i++;
    if (i > currentday) {
        document.getElementById(`door${i}number`).style.backgroundColor = "green";
        document.getElementById(`door${i}number`).style.opacity ="0.5";
    }
}
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



function openDoor(doorid) {    
    var i; 
    for (i= 0; i <= currentday; i++)
        {
            if (doorid <= currentday){
            number = document.getElementById(doorid);
            number.innerHTML = "<img src=\'" + images[(doorid - 1)] + "\' class=\'img-fluid mx-auto d-block\'>";
            }
            
        }
}

function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', {
      videoId: '9P0z8TQM8B8', // this is the id of the video at youtube (the stuff after "?v=")
      loop: true,
      events: {
          onReady: function (e) {
              
              e.target.playVideo();
          },
          onStateChange: function (event) {
              if (event.data == 0) {
                e.target.playVideo(); //repeats the music
              }
          }
      }
  });
}