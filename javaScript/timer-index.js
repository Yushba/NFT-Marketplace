function startTimer3() {
    let hoursElement = document.getElementById('hours-main');
    let minutesElement = document.getElementById('minutes-main');
    let secondsElement = document.getElementById('seconds-main');

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

startTimer3();
