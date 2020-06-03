window.addEventListener("DOMContentLoaded", start);
import ScrollMagic from "scrollmagic";

function start() {
  const videoContainer = document.querySelector("#videoContainer");
  const video = document.querySelector("video");
  let orientation =
    (screen.orientation || {}).type ||
    screen.mozOrientation ||
    screen.msOrientation;
  if (orientation == "landscape-primary" && videoContainer) {
    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller();

    //Scenes
    let scene = new ScrollMagic.Scene({
      duration: 11052,
      triggerElement: videoContainer,
      triggerHook: 0,
    })
      .setPin(videoContainer)
      .addTo(controller);

    //Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;
    let skipAnimation = document.querySelector(".btn.skip-animation");
    // skipAnimation.addEventListener("click", () => {
    //   controller.scrollTo("#youtube-video");
    // });

    scene.on("update", (e) => {
      scrollpos = e.scrollPos / 1000;
      if(e.scrollPos <= 11052 && e.scrollPos >= 700) {
        skipAnimation.classList.add("show");
      } else {
        skipAnimation.classList.remove("show");
      }
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;
      video.currentTime = delay;
    }, 33.3);
  }
}
