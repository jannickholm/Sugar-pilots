window.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")
  const videoContainer = document.querySelector("#videoContainer");
  const video = document.querySelector("video");
  video.playbackRate = 2;
  //Scrollmagic
  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    duration: 11000,
    triggerElement: videoContainer,
    triggerHook: 0.09,
  })
    .setPin(videoContainer)
    .addTo(controller);

  //Videoanimation

  let accelamount = .1;
  let scrollPos = 0;
  let delay = 0;

  scene.on("update", (e) => {
    scrollPos = e.scrollPos / 1000;
  });

  setInterval(() => {
    delay += (scrollPos - delay) * accelamount;
    video.currentTime = delay;
  }, 16.6);
});
