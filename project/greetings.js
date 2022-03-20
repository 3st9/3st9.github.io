const loginForm = document.querySelector('#loginForm');
const greetUser = document.querySelector('#greetUser');
const loginInput = loginForm.querySelector("input:first-child");
const HIDDENKEY = "hidden";
const USERNAMEKEY = "userName";
const savedUserName = localStorage.getItem(USERNAMEKEY);
const logOutForm = document.querySelector('#logOut');

function handleSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAMEKEY, userName);
    loginForm.classList.add(HIDDENKEY);
    greetUser.innerHTML = `Hello! ${userName}`;  
    greetUser.classList.remove(HIDDENKEY);
    logOutForm.classList.remove(HIDDENKEY);
    
}


if (savedUserName!==null) {
    loginForm.classList.add(HIDDENKEY);
    greetUser.innerHTML = `Hello! ${savedUserName}`;  
    greetUser.classList.remove(HIDDENKEY);
    logOutForm.classList.remove(HIDDENKEY);
}

function handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAMEKEY);
    greetUser.classList.add(HIDDENKEY);
    logOutForm.classList.add(HIDDENKEY);
    loginForm.classList.remove(HIDDENKEY);
    loginInput.value = "";
}

loginForm.addEventListener('submit', handleSubmit);
logOutForm.addEventListener('click',handleLogout);