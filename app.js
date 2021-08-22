const form = document.forms["trial-form"]  // get the form object either by id or name
const fname = form["fname"]
const lname = form["lname"]
const email = form["email"]
const password = form["password"]
const submitbtn = form["submit"]
const checkbox = form["checkbox"]
const checkboxError = document.querySelector(".checkbox-error")
// regular expression to validate the charactres in Email and Pasword
const reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
let type = ""

// <-------- function for error message and icon ----------->
function errorMessage(inputType,text) {
    let spanError = document.querySelector(`#${type}-error`)
    let iconError = document.querySelector(`#${type}-icon-error`)
    let iconCorrect = document.querySelector(`#${type}-icon-correct`)
    spanError.innerHTML = text
    iconCorrect.style.display = "none"
    iconError.style.display = "block"
    if (inputType === email) {
        email.placeholder = "email@example/com"
        inputType.style.borderColor = "var(--red)"
        email.classList.add("red-email")
        email.focus()
    } else {
        inputType.placeholder = ""
        inputType.style.borderColor = "var(--red)"
        inputType.focus()
    }
}

// <------------- function for clear the error message and icon ----------->
function clearErrorMessage(inputType) {
    let spanError = document.querySelector(`#${type}-error`)
    let iconError = document.querySelector(`#${type}-icon-error`)
    let iconCorrect = document.querySelector(`#${type}-icon-correct`)
    spanError.innerHTML = ""
    iconError.style.display = "none"
    iconCorrect.style.display = "block"
    inputType.style.borderColor = "rgba(226, 226, 226, .5)"
}


// <--------------- function for custome form validation --------------->
function formValidation() {
    // <----------- First Name validation ------->
    if (fname.value === "") {
        type = "fname"
        let errorText = "*First Name cannot be empty!"
        errorMessage(fname, errorText)
        return false
    } else {
        type = "fname"
        clearErrorMessage(fname)
    }
    // <---------- Last Name validation ------------>
    if (lname.value === "") {
        type = "lname"
        let errorText = "*List Name cannot be empty!"
        errorMessage(lname, errorText)
        return false
    } else {
        type = "lname"
        clearErrorMessage(lname)
    }
    // <------------ Email validation -------------->
    if (reEmail.test(email.value)) {
        type = "email"
        clearErrorMessage(email)
    }
    else {
        type = "email"
        let errorText = "*not a valid Email"
            errorMessage(email, errorText)
            return false
        }
    
    // <----------- Password validation ----------->
        if (rePassword.test(password.value)) {
            type = "password"
            clearErrorMessage(password)
        }
        else {
            type = "password"
            let errorText = "*Weak password"
            errorMessage(password, errorText)
            return false
        }
    
    // <------------ checkbox validation ------------>
    if (checkbox.checked == false) {
        checkboxError.style.visibility = "visible"
        return false
    } else {
        checkboxError.style.visibility = "hidden"
    }
}

// <------------ form validation on clicking the submit button -------->
// submitbtn.addEventListener("click", () => {
//     return formValidation()
// })
// this method submit without verifying so, i call validation() in html

// <------------- input event to remove error message onchecked ---------->
checkbox.addEventListener("input", () => {  // oninput event will fire the funciton immediately where as onchange will fire after cursor loso focus
    checkboxError.style.visibility = "hidden"
})
