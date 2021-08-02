const form = document.forms["trial-form"]  // get the form object either by id or name
const fname = form["fname"]
const lname = form["lname"]
const email = form["email"]
const password = form["password"]
const submitbtn = form["submit"]
const checkbox = form["checkbox"]
const checkboxError = document.querySelector(".checkbox-error")
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

// <-------- email verification --------->
function emailVerification() {
    let flag = 0;
    type = "email"
    let errorText = "*not a valid Email"
    let strs = email.value
    for (str of strs) {
        if (str === "@" || str === ".")
            ++flag
    }
    if (flag >= 2)
        clearErrorMessage(email)
    else {
        errorMessage(email,errorText)
        return false
    }
}

// <--------- password verification ---------->
function passwordVerification() {
    
}
function formValidation() {
    // <----------- First Name validation ------->
    if (fname.value === "") {
        type = "fname"
        let errorText = "*First Name cannot be empty!"
        errorMessage(fname,errorText)
        return false
    } else {
        type = "fname"
        clearErrorMessage(fname)
    }
    // <---------- Last Name validation ------------>
    if (lname.value === "") {
        type = "lname"
        let errorText = "*List Name cannot be empty!"
        errorMessage(lname,errorText)
        return false
    } else {
        type = "lname"
        clearErrorMessage(lname)
    }
    // <------------ Email validation -------------->
    if (email.value === "") {
        type = "email"
        let errorText = "*Email cannot be empty!"
        errorMessage(email,errorText)
        return false
    } else {
        emailVerification()
    }
    // <----------- Password validation ----------->
    if (password.value === "") {
        type = "password"
        let errorText = "*Password cannot be empty!"
        errorMessage(password,errorText)
        return false
    } else {
        type = "password"
        clearErrorMessage(password)
    }
// <------------ checkbox validation ------------>
    if (checkbox.checked == false) {
        checkboxError.style.visibility = "visible"
        return false
    } else{
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
