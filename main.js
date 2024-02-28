document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('passwordForm');

    // Attach event listener to the form
    if (passwordForm) {
        passwordForm.addEventListener('submit', handleFormSubmit);
    }

    // Check time every 5 seconds
    checkTime();
    setInterval(checkTime, 5000);
});

function checkTime() {
    const container = document.getElementById('container');
    const now = new Date();
    const currentHour = now.getUTCHours();
    const currentMinutes = now.getMinutes();

    if ((currentHour === 0 || currentHour === 12) && currentMinutes >= 0 && currentMinutes <= 15){
        // Show the form
        container.classList.add('container');
        if (!document.getElementById('passwordForm')) {
            createForm();
            activateFormListener();
        }
    } else {
        // Hide the form
        container.innerHTML = "";
        container.classList.remove('container');
        deactivateFormListener();
    }
}

function createForm() {
    const container = document.getElementById('container');
    const formHtml = `
        <form id="passwordForm" method="post">
            <label for="password">Enter Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Enter The City</button>
            <p id="message"></p>
        </form>
    `;
    container.innerHTML = formHtml;
}

function activateFormListener() {
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', handleFormSubmit);
    }
}

function deactivateFormListener() {
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.removeEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const passwordBox = document.getElementById('password')
    const passwordInput = passwordBox.value.toLowerCase().replace(/\s+/g, '');
    const message = document.getElementById('message');
    
    if (passwordInput === "eldorado" || passwordInput === "el-dorado") {
        message.style.display = "block"
        message.innerHTML = "Welcome to El Dorado!";
        passwordBox.style.backgroundColor = "white";
        passwordBox.value = "";
        chooseFile();
    } else {
        passwordBox.style.backgroundColor = "red";
        passwordBox.value = "";
        passwordBox.focus();
        message.style.display = "none"
    }
}

function chooseFile() {
    const link = document.createElement('a');
    link.href = "shift24.txt";
    link.download = "shift24.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

