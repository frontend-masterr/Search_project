// // این کد، دکمه‌ی ورود یا ثبت نام را فعال می‌کند.

// // $(document).ready(function() {
// //     $(".btn").click(function() {
// //         if ($(this).attr("id") == "login") {
// //             window.location.href = "login.html";
// //         } else {
// //             window.location.href = "register.html";
// //         }
// //     });
// // });


// let choices = [
//     "How to learn HTML",
//     "How to learn JavaScript",
//     "What is EcmaScript",
//     "How to learn CSS",
//     "What does CSS stands for",
//     "Facebook login",
//     "Login box with HTML & CSS",
//     "Who is a Freelancer",
//     "How to create an Instagram page",
//     "What is a text generator",
//     "Who is Lorem Ipsum",
//     "Backend developer",
//     "Learn to be a backend developer",
//     "Frontend developer",
//     "Web designer",
//     "Web programmer"
//   ];
//   let $ = document;
//   let list_group = $.querySelector(".list-group");
  
//   function ListItemGenerator() {
//     if (!inputTxt.value) {
//       inputTxt.parentElement.classList.remove("active");
//       list_group.style.display = "none";
//     } else {
//       inputTxt.parentElement.classList.add("active");
//       list_group.style.display = "block";
  
//       let SearchResults = choices.filter(function (choice) {
//         return choice.toLowerCase().startsWith(inputTxt.value.toLowerCase());
//       });
  
//       CreatingList(SearchResults);
  
//       function CreatingList(Words) {
//         let createdList = Words.map(function (word) {
//           return "<li>" + word + "</li>";
//         });
//         let CustomListItem;
//         if (!CreatingList.length) {
//           CustomListItem = "<li>" + inputTxt.value + "</li>";
//         } else {
//           CustomListItem = createdList.join("");
//         }
//         list_group.innerHTML = CustomListItem;
//         CompleteText();
//       }
//     }
  
//     function CompleteText() {
//       all_list_items = list_group.querySelectorAll("li");
//       all_list_items.forEach(function (list) {
//         list.addEventListener("click", function (e) {
//           inputTxt.value = e.target.textContent;
//           list_group.style.display = "none";
//         });
//       });
//     }
//   }
  
//   inputTxt.addEventListener("keyup", ListItemGenerator);
  

function toggleShow () {
    var el = document.getElementById("box");
    el.classList.toggle("show");
  }