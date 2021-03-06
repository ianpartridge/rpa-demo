const jobRoles = ['Manager', 'Developer', 'Analyst'];
const numberOfRoles = jobRoles.length;

function doResults() {
    var resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.style.display = "none";

    var employeeName = document.getElementById("employeeId");
    employeeName.innerHTML = document.getElementById("employeeIdInput").value;

    var jobRole = document.getElementById("jobRole");
    jobRole.innerHTML = jobRoles[Math.floor(Math.random() * numberOfRoles)];

    var hoursWorked = document.getElementById("hoursWorked");
    const hours = Math.floor(Math.random() * 37);
    hoursWorked.innerHTML = hours;

    var hoursSaved = document.getElementById("hoursSaved");
    hoursSaved.innerHTML = Math.floor(hours * Math.random());

    resultsDiv.style.display = "inline";
}