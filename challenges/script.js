function calculateAge() {
    var dateOfBirth = document.getElementById("date").value;
    var birthDate = new Date(dateOfBirth);
    var currentDate = new Date();

    var noOfDays = calculateDays(currentDate, birthDate);
    var noOfMonths = calculateMonths(currentDate, birthDate);
    var noOfYears = calculateYears(currentDate, birthDate);

    document.getElementById("days").innerText = noOfDays + " days";
    document.getElementById("months").innerText = noOfMonths + " months";
    document.getElementById("years").innerText = noOfYears + " years";
}

function calculateDays(currentDate, birthDate) {
    var oneDay = 1000 * 60 * 60 * 24;
    var differenceMs = currentDate - birthDate;
    return Math.floor(differenceMs / oneDay);
}

function calculateMonths(currentDate, birthDate) {
    var yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    var monthsDiff = currentDate.getMonth() - birthDate.getMonth();
    return yearsDiff * 12 + monthsDiff;
}

function calculateYears(currentDate, birthDate) {
    var years = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        years--;
    }
    return years;
}

//Rock Paper Scissors
function play(userChoice)
{
    var result;
    
    var choices=["rock","paper","scissors"];
    var computerChoice=choices[Math.floor((Math.random()*3))];

    if(userChoice==computerChoice)
    {
       result="Same move, try again"
    }
    if(userChoice=='rock')
    {
        if(computerChoice=='scissors')
        {
            result="You fail"
        }
        if(computerChoice=='paper')
        {
            result="You win!"
        }
    }
    if(userChoice=='paper')
    {
        if(computerChoice=='scissors')
        {
            result="You fail"
        }
        if(computerChoice=='rock')
        {
            result="You win!"
        }
    }
    if(userChoice=='scissors')
    {
        if(computerChoice=='rock')
        {
            result="You fail"
        }
        if(computerChoice=='paper')
        {
            result="You win!"
        }
    }
    document.getElementById('result').innerHTML=result;
    document.getElementById('computer-choice').innerHTML=computerChoice;

    var computerChoiceImg = document.getElementById('computer-choice-img');
    if(computerChoice==="scissors")
    {
        computerChoiceImg.src = "./img/" + computerChoice + ".jpg";
    }
    else{
        computerChoiceImg.src = "./img/" + computerChoice + ".png";
    }
}
