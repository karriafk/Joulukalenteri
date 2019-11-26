var totaldays = new Date();
var currentdays = totaldays.getDate();
var currentday = 10;
var i = 0;
//console.log(currentdays);
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
while (i < 24) {
    i++;
    if (i > currentday) {
        document.getElementById(`door${i}number`).style.backgroundColor = "green";
        document.getElementById(`door${i}number`).style.opacity = "0.5";
        document.getElementById(`door${i}number`).style.borderRadius = "5px";
        document.getElementById(`door${i}number`).style.border = "solid #228B22 1px";

    }
}
// this list has all the images for the doors.
// what image is displayed is determied by its position in array
var images = [
"https://cdn.pixabay.com/photo/2014/04/10/15/37/snowman-321034_960_720.jpg", // luukku 1
"https://cdn.pixabay.com/photo/2016/12/05/12/52/advent-1883840_1280.jpg", // luukku 2
"https://cdn.pixabay.com/photo/2016/10/27/15/49/christmas-1775511_1280.jpg", // luukku 3
"https://cdn.pixabay.com/photo/2017/11/07/20/43/xmas-2928142_1280.jpg", // luukku 4
"https://cdn.pixabay.com/photo/2016/11/22/02/28/christmas-background-1848203_1280.jpg", // luukku 5
"https://cdn.pixabay.com/photo/2017/07/21/17/15/flag-2526370_1280.jpg", // luukku 6
"https://cdn.pixabay.com/photo/2016/04/01/09/19/christmas-1299283_1280.png", // luukku 7
"https://cdn.pixabay.com/photo/2014/12/11/15/13/angel-564351_1280.jpg", // luukku 8
"https://cdn.pixabay.com/photo/2012/04/13/01/23/santa-31665_1280.png", // luukku 9
"https://image.shutterstock.com/image-vector/merry-christmas-calligraphic-inscription-decorated-600w-717371563.jpg", // luukku 10
"https://cdn.pixabay.com/photo/2017/12/20/16/49/gift-3030279_1280.jpg", // luukku 11
"https://cdn.pixabay.com/photo/2017/11/16/08/35/merry-christmas-2953721_1280.jpg", // luukku 12
"https://cdn.pixabay.com/photo/2015/12/09/00/20/pattern-1084046_1280.jpg", // luukku 13
"https://cdn.pixabay.com/photo/2018/12/20/14/17/christmas-3886118_1280.jpg", // luukku 14
"https://cdn.pixabay.com/photo/2017/11/26/15/21/christmas-2979112_1280.jpg", // luukku 15
"https://cdn.pixabay.com/photo/2018/11/24/01/35/christmas-motif-3834860_1280.jpg", // luukku 16
"https://cdn.pixabay.com/photo/2016/11/14/16/20/christmas-bulb-1823941_1280.jpg", // luukku 17
"https://cdn.pixabay.com/photo/2015/10/30/13/51/snowflakes-1014159_1280.jpg", // luukku 18
"https://cdn.pixabay.com/photo/2015/07/10/17/27/sparkler-839831_1280.jpg", // luukku 19
"https://cdn.pixabay.com/photo/2018/09/10/09/41/christmas-3666649_1280.jpg", // luukku 20
"https://cdn.pixabay.com/photo/2016/10/25/13/43/christmas-stollen-1768907_1280.jpg", // luukku 21
"https://cdn.pixabay.com/photo/2018/11/09/19/57/christmas-3805334_1280.jpg", // luukku 22
"https://cdn.pixabay.com/photo/2017/12/01/16/14/cinnamon-stars-2991174_1280.jpg", // luukku 23
"https://cdn.pixabay.com/photo/2016/11/18/10/32/christmas-1833916_1280.jpg" // luukku 24
];



function openDoor(doorid) {
    var i;
    for (i = 0; i <= currentday; i++) {
        if (doorid <= currentday) {
            number = document.getElementById(doorid);
            number.innerHTML = "<img src=\'" + images[(doorid - 1)] + "\' class=\'img-fluid mx-auto d-block\'>";
        }

    }
    
}
