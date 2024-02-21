//Function to alert if dob is before 31st december 2015

function checkDOB() {
    var dob = document.getElementById("dob").value;
    if (dob < "2015-12-31") {
        alert("Date of Birth should be after 31st December 2015");
    }
}