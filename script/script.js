let openCommentBtn = document.querySelector(".comments__open-button");
let commentsBlock = document.querySelector(".comments__wrapper");

openCommentBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!commentsBlock.classList.contains("active-form")) {
    commentsBlock.classList.add("active-form");
  } else {
    commentsBlock.classList.remove("active-form");
  }
});
