function calculate(){
    var bmr = 0;
    var calories = 0;
    var ageData = document.getElementById('ageVal').value;
    var genderData = document.querySelector('input[name="gender"]:checked').value;
    var heightData = document.getElementById('heightVal').value;
    var weightData = document.getElementById('weightVal').value;
    var option = document.getElementById("activitySelect").value;
    
    if(genderData == 'Male'){
        bmr = (10*weightData)+(6.25*heightData) - (5*ageData) + 5
        // bmr = (10*65)+(6.25*180) - (5*15) + 5;
    }

    if(genderData == 'Female'){
        bmr = (10*weightData)+(6.25*heightData) - (5*ageData) - 161
        // bmr = (10*65)+(6.25*180) - (5*15) - 161;
    }

    if (option=="BMR"){
        calories = bmr;
    }

    if (option=="Sedentary"){
        calories = bmr*1.2;
    }
    if (option=="Light"){
        calories = bmr*1.375;
    }
    if (option=="Moderate"){
        calories = bmr*1.55;
    }
    if (option=="Very"){
        calories = bmr*1.725;
    }

    sessionStorage.setItem("option",option);
    sessionStorage.setItem("calories", calories+" Calories/day");

    // alert(bmr+" "+calories);
}

document.getElementById('optionSelected').innerHTML = sessionStorage.getItem("option");
document.getElementById('displayCalories').innerHTML = sessionStorage.getItem("calories");
window.onreset = sessionStorage.clear();