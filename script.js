
const secondsHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();

    const hours = now.getHours();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();

    const hoursToDegrees = ((hours / 12) * 360) + 90;
    const minsToDegrees = ((mins / 60) * 360) + 90;
    const secondsToDegrees = ((seconds / 60) * 360) + 90;

    secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsToDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursToDegrees}deg)`;

}

setInterval(setDate, 1000)