function calculateCGPA() {
    let credits = document.getElementById("c1").value;
    let grade = document.getElementById("g1").value;

    if (credits === "") {
        alert("Please enter credits");
        return;
    }

    let cgpa = (credits * grade) / credits;

    document.getElementById("result").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}
