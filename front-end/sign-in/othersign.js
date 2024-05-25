let name = document.querySelector(".name")
let span1 = document.querySelector(".sp-first")
let email = document.querySelector(".email")
let span2 = document.querySelector(".sp-second")
let password = document.querySelector(".pass")
let span3 = document.querySelector(".sp-third")


// validation phone number
const validPhoneNumber = () => {
    if (name.value.length < 16) {
        span1.innerHTML = "لطفا شماره کارت را به درستی وارد کنید"
        span1.style.color = "red"
    } else {
        span1.innerHTML = "شماره کارت شما به درستی وارد شد"
        span1.style.color = "green"
    }
}
name.addEventListener("blur", validPhoneNumber)


//validation email
const validEmail = () => {
    if (email.value.length < 11) {
        span2.innerHTML = "شماره شبا شما به درستی نوشته نشده است"
        span2.style.color = "red"
    } else {
        span2.innerHTML = "شماره شبا شما به درستی وارد شد"
        span2.style.color = "green"
    }
}
email.addEventListener("blur", validEmail)


//validation password
const validPassword = () => {
        span3.innerHTML = "لطفا عکس کارت ملی خود را ارسال کنید"
        span3.style.color = "red"
}
password.addEventListener("blur", validPassword)


