/*
Create an application that will let users submit their ID number using an input element and 
check to see if it is 13 characters and that it is a number
Display the following data:
- day/month/year
- gender: male / female

- the first six digits are the birthdate
- the next four determine whether they are male or female (if its above 5000, they are male)
- 
*/

const idInput = document.getElementById('id-input')
const birthDate = document.getElementById('birthDate')
const gender = document.getElementById('gender')
const generateBtn = document.querySelector('[generate]')
const error = document.getElementById('error')

generateBtn.addEventListener('click', () => {
    let idValue = idInput.value
    let chosenGender = gender

    if (!isNaN(idValue) && idValue.length === 13){
        let birthdayCheck = idValue.slice(0, 6)

        let month = birthdayCheck.slice(2, 4)
        let year = birthdayCheck.slice(0, 2)
        let day = birthdayCheck.slice(4, 6)
        let genderCheck = idValue.slice(7, 8)
        
        if(birthdayCheck && genderCheck){
            let date = new Date(month, day, year)
            birthDate.value = date 

            if(genderCheck <= 5){
                chosenGender.value = "Female"
            } else{
                chosenGender.value = "Male"
            }
        }
        console.log(birthdayCheck)

    }else{
        error.textContent = 'Error: Please enter valid value'
        error.classList.add('error')
    }
})