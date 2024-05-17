function calculateBMI() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (age && gender && weight && height) {
        // Convert height from inches to meters
        const heightInMeters = height * 0.0254;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('bmi-result').innerText = `BMI: ${bmi} (${category})`;
    } else {
        alert('Please enter all the details.');
    }
}
