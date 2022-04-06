



//DOM Elements
const time = document.getElementById('timer'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');



const prependZero = (arg) => {
    return (parseInt(arg, 10) < 10 ? '0' : '') + arg;
}

const handleGreet = (hour) => {
    if (hour < 12) {
        document.body.style.backgroundImage = "url('./images/morning.png')";
        document.body.style.color = '#aaa';
        return 'Good Morning, ';
    } else if (hour < 17) {
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
        return 'Good Afternoon, ';
    } else if (hour > 16) {
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
        document.body.style.color = '#ccc';
        return 'Good Evening, ';
    }
}

const displayTime = () => {
    let today = new Date(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        seconds = today.getSeconds();


    greeting.innerHTML = handleGreet(hour);

    hour = hour % 12 || 12; // Set to 12 hour mode

    //Ensure there's a 0 prepended to values less than 10

    time.innerHTML = `${prependZero(hour)} : ${prependZero(minute)} : ${prependZero(seconds)}`;

    setTimeout(displayTime, 1000);
}

displayTime();

const getName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

const getFocus = () => {
    if (localStorage.getItem('focus') === null) {
        console.log('No entry found for focus')
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Persist data in local storage

const setName = (e) => {
    if (e.type == 'keypress') { // for the keypress event alone
        if (e.which == 13 || e.keyCode == 13) { // Confirm of Enter key is pressed
            localStorage.setItem('name', e.target.innerText);
            name.blur(); // Prevent cursor from moving to new line on Enter key press
        }
    } else { // the blur event
        localStorage.setItem('name', e.target.innerText);
    }
}

const setFocus = (e) => {
    if (e.type == 'keypress') { // for the keypress event alone
        if (e.which == 13 || e.keyCode == 13) { // Confirm of Enter key is pressed
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); // Prevent cursor from moving to new line on Enter key press
        }
    } else { // the blur event
        localStorage.setItem('focus', e.target.innerText);
    }
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

getName();
getFocus();