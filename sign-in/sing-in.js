let name = document.querySelector(".name")
let span1 = document.querySelector(".sp-first")
let email = document.querySelector(".email")
let span2 = document.querySelector(".sp-second")
let password = document.querySelector(".pass")
let span3 = document.querySelector(".sp-third")


// validation phone number
const validPhoneNumber = () => {
    if (name.value.length < 8) {
        span1.innerHTML = " * نام و نام خانوادگی حداقل باید 8 کاراکتر باشد"
        span1.style.color = "red"
    } else {
        span1.innerHTML = "نام و نام خانوادگی صحیح میباشد"
        span1.style.color = "green"
    }
}
name.addEventListener("blur", validPhoneNumber)


//validation email
const validEmail = () => {
    if (email.value.length < 11) {
        span2.innerHTML = "*ایمیل / شماره موبایل صحیح نمیباشد"
        span2.style.color = "red"
    } else {
        span2.innerHTML = "ایمیل / شماره موبایل صحیح میباشد"
        span2.style.color = "green"
    }
}
email.addEventListener("blur", validEmail)


//validation password
const validPassword = () => {
    if (password.value.length < 8) {
        span3.innerHTML = "*رمز شما باید بیشتر از 8 کاراکتر داشته باشد"
        span3.style.color = "red"
    } else {
        span3.innerHTML = "رمز صحیح میباشد"
        span3.style.color = "green"
    }
}
password.addEventListener("blur", validPassword)


