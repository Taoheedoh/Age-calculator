const inputDay = document.getElementById('day')

const inputMonth = document.getElementById('month')

const inputYear = document.getElementById('year')

// Date

const todaysDate = new Date()

const currentDay = todaysDate.getDate()
console.log(currentDay)

const currentMonth = todaysDate.getMonth() + 1
console.log(currentMonth)

const currentYear = todaysDate.getFullYear()
console.log(currentYear)

function calculateAge(){
    let totalDays = currentDay - inputDay.value
    let totalMonths = currentMonth - inputMonth.value
    let totalYears = currentYear - inputYear.value

    yearOutput.innerHTML = totalYears
    monthOutput.innerHTML = totalMonths
    dayOutput.innerHTML = totalDays

    
    
    if(inputYear.value > currentYear ){
        errorYear.innerHTML = 'Must be in the past'
        errorYear.style.color = 'red'
        year.style.border = 'solid red' 
        month.style.border = 'solid red'  
        day.style.border = 'solid red'

        

    }else if (inputMonth.value > 12) {
        errorMonth.innerHTML ='Must be a valid month'
        errorMonth.style.color = 'red'
        month.style.border = 'solid red'
        year.style.border = 'solid red'
        day.style.border = 'solid red'

    }else if (inputDay.value > 31){
        errorDay.innerHTML ='Must be a valid day'
        errorDay.style.color = 'red'
        month.style.border = 'solid red'
        year.style.border = 'solid red'
        day.style.border = 'solid red'
    }else{

    }

    
}

