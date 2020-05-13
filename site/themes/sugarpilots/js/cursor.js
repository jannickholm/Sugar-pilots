!(function() {
  var t, o;
  function r() {
    for (
        i = 0;
      i < o.length;
      i++
    ) {
      var e = o[i];
      e.style.setProperty("--width", e.offsetWidth),
        e.style.setProperty("--height", e.offsetHeight),
        e.style.setProperty("--top", e.offsetTop),
        e.style.setProperty("--left", e.offsetLeft),
        e.style.setProperty("--random", Math.random());
    }
  }
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      (t = document.body.style),
        (o = document.querySelectorAll(".momentumcss")),
        t.setProperty("--loaded", 0),
        t.setProperty("--scrollx", window.scrollX),
        t.setProperty("--scrolly", window.scrollY),
        t.setProperty("--clientx", "0"),
        t.setProperty("--clienty", "0")
        window.addEventListener(
          "scroll",
          function() {
            t.setProperty("--scrollx", window.scrollX),
              t.setProperty("--scrolly", window.scrollY);
          },
          !1
        ),
        window.addEventListener(
          "pointermove",
          function(e) {
            t.setProperty("--clientx", e.clientX),
              t.setProperty("--clienty", e.clientY);
          },
          !1
        ),
        window.addEventListener(
          "touchmove",
          function(e) {
            t.setProperty("--clientx", e.touches[0].clientX),
              t.setProperty("--clienty", e.touches[0].clientY);
          },
          !1
        ),
        window.addEventListener(
          "touchstart",
          function(e) {
            t.setProperty("--pointerdown", 0),
              t.setProperty("--clientx", e.touches[0].clientX),
              t.setProperty("--clienty", e.touches[0].clientY)
          },
          !1
        )
        r();
    },
    !1
  )
    window.addEventListener("resize", r);
})();