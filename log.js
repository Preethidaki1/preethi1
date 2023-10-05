document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    const confirmationDialog = document.getElementById("confirmationDialog");
    const confirmLogoutButton = document.getElementById("confirmLogout");
    const cancelLogoutButton = document.getElementById("cancelLogout");

    // Show the confirmation dialog when the Logout button is clicked
    logoutButton.addEventListener("click", function () {
        confirmationDialog.style.display = "block";
    });

    // Handle the logout confirmation
    confirmLogoutButton.addEventListener("click", function () {
        // You can perform the actual logout action here if needed
        alert("Logged out successfully!"); // Replace with your logout logic
        window.location.href = "login.html"; // Redirect to login page
    });

    // Close the confirmation dialog if Cancel is clicked
    cancelLogoutButton.addEventListener("click", function () {
        confirmationDialog.style.display = "none";
    });
});
