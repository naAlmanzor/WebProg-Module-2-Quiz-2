function calculate(){
    var bmr = 0;
    var calories = 0;
    var ageData = document.getElementById('ageVal').value;
    var genderData = document.querySelector('input[name="gender"]:checked').value;
    var heightData = document.getElementById('heightVal').value;
    var weightData = document.getElementById('weightVal').value;
    var foodName = document.getElementById("foodName").value;
    var foodData = document.getElementById('foodCalories').value;

    var option = document.getElementById("activitySelect").value;

    if (!ageData || !heightData || !weightData ||!foodName ||!foodData){
        alert("Error! Form must be filled up.");
    }    

    else{

        // Check Gender
        switch (genderData){
            case "Male":
                bmr = (10*weightData)+(6.25*heightData) - (5*ageData) + 5
            break;

            case "Female":
                bmr = (10*weightData)+(6.25*heightData) - (5*ageData) - 161
            break;
        }
        
        // Check activity selected
        switch (option){
            case "BMR":
                calories = bmr;
                break;
            case "Sedentary":
                calories = bmr;
                break;
            case "Light":
                calories = bmr;
                break;

            case "Moderate":
                calories = bmr;
                break;
            
            case "Very Active":
                calories = bmr;
                break;
        }
        document.getElementById("caloriesCalc").action = "result.html"
    }
    
    // Sets Item for next page
    sessionStorage.setItem("option",option);
    sessionStorage.setItem("calories", calories+" calories/day");
    sessionStorage.setItem("foodName", "With "+foodName);
    sessionStorage.setItem("foodCalories", (calories-foodData)+" calories/day");
}

function onLoad(){
    document.getElementById('optionSelected').innerHTML = sessionStorage.getItem("option");
    document.getElementById('displayCalories').innerHTML = sessionStorage.getItem("calories");
    document.getElementById('foodNameDisplay').innerHTML = sessionStorage.getItem("foodName");
    document.getElementById('foodCalories').innerHTML = sessionStorage.getItem("foodCalories");
}

window.onload = onLoad();