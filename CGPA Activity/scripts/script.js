function calculateGPA() {
    var subjName = document.getElementById("courseOne");
    var subjCreds = document.getElementById("courseOneCredits");
    var da1marks = document.getElementById("courseOneDA1");
    var quiz1marks = document.getElementById("courseOneQuiz1");
    var quiz2marks = document.getElementById("courseOneQuiz2");
    var cat1marks = document.getElementById("courseOneCAT1");
    var cat2marks = document.getElementById("courseOneCAT2");
    var fatmarks = document.getElementById("courseOneFAT");

    //Convert all marks to a float
    var credits = parseInt(subjCreds.value);
    var da1 = parseFloat(da1marks.value);
    var quiz1 = parseFloat(quiz1marks.value);
    var quiz2 = parseFloat(quiz2marks.value);
    var cat1 = parseFloat(cat1marks.value);
    var cat2 = parseFloat(cat2marks.value);
    var fat = parseFloat(fatmarks.value);


    var weightageFAT = 0.4 * fat;
    var internals = da1 + quiz1 + quiz2 + (0.3*cat1) + (0.3*cat2);
    var overallMarks = weightageFAT + internals;

    var grade = "B";
    var gpa = 0;

    if(overallMarks >= 90) {
        grade = "S";
        gpa = 10;
    }
    else if(overallMarks >= 80) {
        grade = "A";
        gpa = 9;
    }
    else if(overallMarks >= 70) {
        grade = "B";
        gpa = 8;
    }
    else if(overallMarks >= 60) {
        grade = "C";
        gpa = 7;
    }
    else if(overallMarks >= 55) {
        grade = "D";
        gpa = 6;
    }
    else if(overallMarks >= 50) {
        grade = "E";
        gpa = 5;
    }
    else {
        grade = "F";
        gpa = 0;
    }

    console.log("Internal Marks: ", internals, " | Overall Marks: ", overallMarks, " | Grade: ", grade, " | GPA: ", gpa);

    var displayDiv = document.getElementsByClassName("displayGrade")
    displayDiv[0].innerHTML = "Grade: " + grade + " | GPA: " + gpa;

}