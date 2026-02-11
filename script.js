// Original code functionality
function originalFunction() {
    console.log('Original functionality');
}

// Birthday confirmation function
function birthdayConfirmation() {
    const birthday = prompt('Please enter your birthday (YYYY-MM-DD):');
    const currentDate = new Date();
    const birthDate = new Date(birthday);

    if (birthDate.getMonth() === currentDate.getMonth() && birthDate.getDate() === currentDate.getDate()) {
        alert('Happy Birthday!');
    } else {
        alert('Today is not your birthday.');
    }
}

function init() {
    birthdayConfirmation();
    originalFunction();
}

init();