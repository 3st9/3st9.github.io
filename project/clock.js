const clock = document.querySelector('h2#clock');
const dateOfToday = document.querySelector('#date');
const time = new Date();
console.log(dateOfToday);

function getClock() {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2, "0");
    const minute = time.getMinutes().toString().padStart(2, "0");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateNow = new Intl.DateTimeFormat('en-US', options).format(time)
    
    clock.innerText = `${hour}:${minute}`;
    dateOfToday.innerHTML = dateNow;
}

getClock();
setInterval(getClock,1000);
