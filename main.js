// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("image-container");
  const audio = document.getElementById("audio");

  // Add an event listener to the image
  imageContainer.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});