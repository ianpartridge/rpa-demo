function doResults() {
    var resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.style.display = "none";

    var employeeName = document.getElementById("employeeId");
    employeeName.innerHTML = document.getElementById("employeeIdInput").value

    var hoursWorked = document.getElementById("hoursWorked");
    const hours = Math.floor(Math.random() * 37);
    hoursWorked.innerHTML = hours;

    var hoursSaved = document.getElementById("hoursSaved");
    hoursSaved.innerHTML = Math.floor(hours * Math.random());

    resultsDiv.style.display = "inline";
}