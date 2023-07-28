const rotates = document.querySelectorAll(".rotate");
const list = document.querySelectorAll(".list");
const childLists = document.querySelectorAll(".list .question");
const answer = document.querySelectorAll(".answer");

// Dropdown Box Logic
childLists.forEach((childList) => {
  childList.addEventListener("click", (e) => {
    e.target.classList.toggle("activate");
    const answers = e.target.nextElementSibling;
    if (e.target.classList.contains("activate")) {
      answers.style.maxHeight = answers.scrollHeight + "px";
      // console.log(answers.scrollHeight);
    } else {
      answers.style.maxHeight = 0;
    }
  });
});

rotates.forEach((rotate) => {
  rotate.addEventListener("click", (e) => {
    e.target.parentElement.previousElementSibling.previousElementSibling.classList.toggle(
      "activate"
    );
    const answers =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .nextElementSibling;
    if (
      e.target.parentElement.previousElementSibling.previousElementSibling.classList.contains(
        "activate"
      )
    ) {
      answers.style.maxHeight = answers.scrollHeight + "px";
      // console.log(answers.scrollHeight);
    } else {
      answers.style.maxHeight = 0;
    }
  });
});
////////////////////////////////////
