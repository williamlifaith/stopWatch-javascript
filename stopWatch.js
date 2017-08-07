var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();

        document.getElementById("startPause").innerHTML = "Pause";


        document.getElementById("startPause").style.color="red";

    } else {
        running = 0;

        document.getElementById("startPause").innerHTML = "Resume";
         document.getElementById("startPause").style.color="yellow";


    }

}

function reset() {
    running = 0;
    time = 0;
    document.getElementById("startPause").innerHTML = "Start";
     document.getElementById("startPause").style.color="green";

    document.getElementById("output").innerHTML = "00:00:00";

}

function increment() {
    if (running == 1) {
        setTimeout(function() {
                time++;
                var mins = Math.floor(time / 10 / 60);
                var secs = Math.floor(time / 10 % 60);
                var hours = Math.floor(time / 10 / 60 / 60);
                var tenths = time % 10;

                if (mins < 10) {
                    mins = "0" + mins;

                }

                if (secs < 10) {
                    secs = "0" + secs;
                }

                document.getElementById("output").innerHTML = hours + ":"+ mins + ":" + secs +":"+ tenths + "0";
                increment();

            },

            100);
    }
}
