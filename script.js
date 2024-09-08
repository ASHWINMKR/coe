// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    const currentTime = now.toLocaleTimeString('en-US', { hour12: true });

    document.getElementById('date').textContent = currentDate;
    document.getElementById('time').textContent = currentTime;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form default submission behavior

    // Get the input values
    const rollNo = document.getElementById('ROLLNO');
    const password = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Check if inputs are empty
    if (rollNo.value.trim() === '' || password.value.trim() === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        triggerShakeEffect(rollNo);
        triggerShakeEffect(password);
        return;
    }

    // Simulate login validation (you would replace this with actual login logic)
    const validRollNo = 'karpagamkanakku@kahe.edu.in'; // Example roll number
    const validPassword = '12345678'; // Example password

    // Check if credentials are correct
    if (rollNo.value !== validRollNo || password.value !== validPassword) {
        errorMessage.textContent = 'Incorrect Roll No or Password.';
        triggerShakeEffect(rollNo);
        triggerShakeEffect(password);
    } else {
        alert('Login successful!');
        // Redirect to another page or perform further actions
        // window.location.href = "dashboard.html"; // Example redirection
    }
});
function triggerShakeEffect(input) {
    input.classList.add('shake');
    setTimeout(() => {
        input.classList.remove('shake');
    }, 500); 
}










// document.getElementById('loginForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const rollNo = document.getElementById('ROLLNO').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('error-message');

//     errorMessage.textContent = '';

//     if (rollNo.trim() === '' || password.trim() === '') {
//         errorMessage.textContent = 'Please fill in all fields.';
//         triggerShakeEffect(document.getElementById('ROLLNO'));
//         triggerShakeEffect(document.getElementById('password'));
//         return;
//     }

//     try {
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ rollNo, password })
//         });

//         if (response.ok) {
//             alert('Login successful!');
//             // Redirect to another page or perform further actions
//             // window.location.href = "dashboard.html"; // Example redirection
//         } else {
//             const errorText = await response.text();
//             errorMessage.textContent = errorText;
//             triggerShakeEffect(document.getElementById('ROLLNO'));
//             triggerShakeEffect(document.getElementById('password'));
//         }
//     } catch (error) {
//         errorMessage.textContent = 'An error occurred. Please try again later.';
//     }
// });
