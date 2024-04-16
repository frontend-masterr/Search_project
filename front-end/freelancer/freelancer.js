// const users = [
//     {
//       "name": "نام 1",
//       "familyName": "نام خانوادگی ",
//       "specialty": "تخصص ",
//       "resume": "متن رزومه "
//     },
//     // ... 14 کاربر دیگر
//   ];
  
//   const usersListElement = document.querySelector(".users-list");
  
//   // اضافه کردن 15 کاربر به لیست
//   users.forEach((user) => {
//     const userItemElement = document.createElement("li");
//     userItemElement.classList.add("user-item");
  
//     const nameElement = document.createElement("h3");
//     nameElement.textContent = `${user.name} ${user.familyName}`;
  
//     const specialtyElement = document.createElement("p");
//     specialtyElement.textContent = `تخصص: ${user.specialty}`;
  
//     const resumeButtonElement = document.createElement("button");
//     resumeButtonElement.textContent = "مشاهده رزومه";
//     resumeButtonElement.addEventListener("click", () => {
//       // نمایش پیغام "ابتدا وارد وبسایت شوید"
//       alert("برای مشاهده رزومه ابتدا وارد وبسایت شوید!");
//     });
  
//     userItemElement.appendChild(nameElement);
//     userItemElement.appendChild(specialtyElement);
//     userItemElement.appendChild(resumeButtonElement);
  
//     usersListElement.appendChild(userItemElement);
//   });
  