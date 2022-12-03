const select = document.querySelector(".select-rating");
const rate = document.querySelectorAll(".rate");
const submit = document.querySelector(".button");
let value = 0;
select.addEventListener("click", function (e) {
  if (e.target.classList.contains("rate")) {
    e.target.classList.toggle("selected");
  }
  value = e.target.innerText;
  localStorage.setItem("rate", value);
});

// rate.forEach((element, index) => {
//   if (element.classList.contains("selected")) {
//     value = element.innerTEXT;
//   }
// });
// console.log(value);
