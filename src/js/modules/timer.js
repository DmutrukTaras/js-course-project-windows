const timer = (selector, deadline) => {

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let sec = Math.floor((t / 1000) % 60),
            min = Math.floor((t / 1000 / 60) % 60),
            hour = Math.floor((t / 1000 / 60 / 60) % 24),
            day = Math.floor((t / 1000 / 60 / 60 / 24)),

            time = {
                'total': t,
                'seconds': sec,
                'minutes': min,
                'hours': hour,
                'days': day
            };
        return time;
    };

    let addZero = (num) => {
        if (num <= 9) {
            num = '0' + num;
        }
        return num
    }

    let setTimer = (selector, deadline) => {
        let timerBlock = document.getElementById(selector),
            days = timerBlock.querySelector('#days'),
            hours = timerBlock.querySelector('#hours'),
            minutes = timerBlock.querySelector('#minutes'),
            seconds = timerBlock.querySelector('#seconds');

        let UpdateTimer = () => {
            let time = getTimeRemaining(deadline);
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);
            if (time.total < 0) {
                clearInterval(timerInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
        UpdateTimer();

        let timerInterval = setInterval(UpdateTimer, 1000);

    }
    setTimer(selector, deadline);
}



export default timer;