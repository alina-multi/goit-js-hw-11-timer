const refs = {
    timerContainer: document.querySelector("#timer-1"),
    days: document.querySelector("[data-value='days']"),
    hours: document.querySelector("[data-value='hours']"),
    mins: document.querySelector("[data-value='mins']"),
    secs: document.querySelector("[data-value='secs']")
};


class CountdownTimer {
    constructor({ targetDate }) {

        this.targetDate = targetDate.getTime();
        this.currentDate = null;
    }

    start() {
        this.currentDate = Date.now();
        if (this.currentDate === this.targetDate) {
            return;
        }
        setInterval(() => {
            const numbers = this.initTime();
            this.createMarkupTimer(numbers);
        }, 1000);
    };


    initTime() {
        this.currentDate = Date.now();
        const deltaTime = this.targetDate - this.currentDate;

        const days = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((deltaTime % (1000 * 60)) / 1000);
        return { days, hours, mins, secs };
    };


    createMarkupTimer({ days, hours, mins, secs }) {
        refs.days.textContent = days < 10 ? `0${days}` : days;
        refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
        refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
    }




};

const timer1 = new CountdownTimer({
    targetDate: new Date("09 20, 2021"),

});

timer1.start();

console.log(timer1);





