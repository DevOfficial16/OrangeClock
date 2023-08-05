

function setTime(){


// defining variables 
    var d = new Date();  // making date component
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

// setting the rotations according to thr time
    var hour = 360 * (h / 12);
    var minute = 360 * (m / 60);
    var second = 360 * (s / 60);

    document.getElementById("hour").style.transform = 'rotate('+hour+'deg)';

    document.getElementById("minute").style.transform = 'rotate('+minute+'deg)';

    document.getElementById("second").style.transform = 'rotate('+second+'deg)';


}

setInterval(function(){
    setTime()
},1000);


setTime();