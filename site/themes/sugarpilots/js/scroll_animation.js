window.addEventListener("DOMContentLoaded", start);
import ScrollMagic from "scrollmagic";
function start() {
    const videoContainer = document.querySelector("#videoContainer");
    const video = document.querySelector("video");
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

    scene.on("update", (e) => {
      scrollpos = e.scrollPos / 1000;
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;
      console.log(scrollpos, delay);
      video.currentTime = delay;
    }, 33.3);
}
