function calculateGrades(){
    let midMarks = document.getElementById("Mid-Marks").value;
    console.log("Mid Marks:", midMarks);
    if (midMarks === "") {
        document.getElementById("error-message").innerText = "Please enter your midterm marks.";
        return ;
    }
    if(midMarks < 0 || midMarks > 100) {
        document.getElementById("error-message").innerText = "Marks must be between 0 and 100.";
        return ;
    }
    if(isNaN(midMarks)) {
        document.getElementById("error-message").innerText = "Please enter a valid number.";
        return ;
    }
    else {
        let For_A_plus = (90 - (midMarks * 0.4)) / 0.6;
        let For_A = (85 - (midMarks * 0.4)) / 0.6;
        let For_B_plus = (80 - (midMarks * 0.4)) / 0.6;
        let For_B = (75 - (midMarks * 0.4)) / 0.6;
        let For_C_plus = (70 - (midMarks * 0.4)) / 0.6;
        let For_C = (65 - (midMarks * 0.4)) / 0.6;
        let For_D_plus = (60 - (midMarks * 0.4)) / 0.6;
        let For_D = (50 - (midMarks * 0.4)) / 0.6;
        document.getElementById("result").style.display = "block";
        document.getElementById("A-plus").innerText = For_A_plus.toFixed(2);
        document.getElementById("A").innerText = For_A.toFixed(2);
        document.getElementById("B-plus").innerText = For_B_plus.toFixed(2);
        document.getElementById("B").innerText = For_B.toFixed(2);
        document.getElementById("C-plus").innerText = For_C_plus.toFixed(2);
        document.getElementById("C").innerText = For_C.toFixed(2);
        document.getElementById("D-plus").innerText = For_D_plus.toFixed(2);
        document.getElementById("D").innerText = For_D.toFixed(2);
        document.getElementById("error-message").innerText = "";
    }
}