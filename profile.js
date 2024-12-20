// Retrieve data from localStorage
const email = localStorage.getItem("email");
const dob = localStorage.getItem("dob");
const age = localStorage.getItem("age");
const year = localStorage.getItem("year");
const role = localStorage.getItem("role");

if (window.location.pathname.endsWith('profile.html')) {
    const username = localStorage.getItem('username');
    const userDetails = JSON.parse(localStorage.getItem(username)); // Fetch user details from local storage

    if (userDetails) {
        document.getElementById('profile-username').textContent = userDetails.username;
        document.getElementById('profile-email').textContent = userDetails.email;
        document.getElementById('profile-dob').textContent = userDetails.dob;
        document.getElementById('profile-age').textContent = userDetails.age;
        document.getElementById('profile-year').textContent = userDetails.year;
        document.getElementById('profile-role').textContent = userDetails.role;
    } else {
        alert('User details not found!');
        window.location.href = 'dashboard.html';
    }
}

// Logout function (clears data and redirects to login)
function logout() {
    localStorage.clear();
    window.location.href = "login.html"; // Redirect to the login page or home
}
// Display username on user-details.html
if (document.getElementById('display-username')) {
    const username = localStorage.getItem('username');
    document.getElementById('display-username').textContent = username;
}