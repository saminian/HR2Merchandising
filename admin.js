// Mock data to store trainees and schedules
let trainees = [];
let schedules = [];
let selectedTrainee = null;

// Onboarding Form Submission
document.getElementById('onboardingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const email = document.getElementById('email').value;
    
});
document.getElementById('traineeList').addEventListener('click', function() {
    window.location.href = 'training schedule.html'; // Replace 'training schedule.html' with your target page
});