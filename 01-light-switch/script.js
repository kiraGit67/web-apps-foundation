const body = document.querySelector("body");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
