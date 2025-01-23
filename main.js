let shareBtn = document.querySelector(".share-btn");

// Create share container and add it's contents
let shareOption = document.createElement("div");
let facebookImage = document.createElement("img");
let twitterImage = document.createElement("img");
let pinterestImage = document.createElement("img");

shareOption.classList.add("share-option");

facebookImage.src = "images/icon-facebook.svg";
twitterImage.src = "images/icon-twitter.svg";
pinterestImage.src = "images/icon-pinterest.svg";

shareOption.innerHTML = "Share";
shareOption.appendChild(facebookImage);
shareOption.appendChild(twitterImage);
shareOption.appendChild(pinterestImage);

// append shareOption div to shareBtn when first load the page
window.onload = function () {
  if (
    typeof window.localStorage !== "undefined" &&
    !localStorage.getItem("visited")
  ) {
    // add shareOption div
    shareBtn.appendChild(shareOption);

    shareOption.classList.add("hidden");
    localStorage.setItem("visited", true);
  }
};

// Remove visited when user leaves the page
window.onbeforeunload = function () {
  localStorage.removeItem("visited");
};

// Add click event handler
shareBtn.addEventListener("click", (e) => {
  if (!shareOption.contains(e.target)) {
    shareOption.classList.toggle("hidden");
  }
});

// Hide shareOption when click on anywhere on the window
window.addEventListener("click", (e) => {
  if (
    !shareBtn.contains(e.target) &&
    !shareOption.classList.contains("hidden")
  ) {
    shareOption.classList.toggle("hidden");
  }
});
