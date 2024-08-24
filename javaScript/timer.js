function startTimer() {
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let totalSeconds = 24 * 60 * 60;

    function updateTimer() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        totalSeconds--;

        if (totalSeconds < 0) {
            totalSeconds = 24 * 60 * 60;
        }
    }

    setInterval(updateTimer, 1000);
}

startTimer();

function startTimer2() {
    let hoursElement = document.getElementById('hours-min');
    let minutesElement = document.getElementById('minutes-min');
    let secondsElement = document.getElementById('seconds-min');

    let totalSeconds = 24 * 60 * 60;

    function updateTimer() {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');

        totalSeconds--;

        if (totalSeconds < 0) {
            totalSeconds = 24 * 60 * 60;
        }
    }

    setInterval(updateTimer, 1000);
}

startTimer2();