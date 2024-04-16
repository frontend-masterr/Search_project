let email = document.querySelector(".first")
let span1 = document.querySelector(".sp-first")
let password = document.querySelector(".second")
let span2 = document.querySelector(".sp-second")

// validation email value
const validEmail = () => {
    if (email.value.length < 10) {
        span1.style.display = "block"
        span1.style.color = "red"
        span1.innerHTML = "*شماره تلفن یا ایمیل شما ثبت نشده است"
    } else {
        span1.style.display = "block"
        span1.style.color = 'green'
        span1.innerHTML = "مقدار وارد شده صحیح است"
    }
}
email.addEventListener('blur', validEmail)


// validation password value
const validPassword = () => {
    if (password.value.length < 6) {
        span2.style.display = "block"
        span2.style.color = "red"
        span2.innerHTML = "*رمز ورود اشتباه است"
    } else {
        span2.style.display = "block"
        span2.style.color = 'green'
        span2.innerHTML = "مقدار وارد شده صحیح است"
    }
}

password.addEventListener("blur", validPassword)
