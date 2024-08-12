// Import Locomotive Scroll if using modules
// import LocomotiveScroll from 'locomotive-scroll';

document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    // You can add more options here
  });
});

function circlMouse() {
  window.addEventListener("mousemove", function (e) {
   document.querySelector("#mousecircle").style.transform = `translate(${e.clientX}px , ${e.clientY}px)`;
  });
}
circlMouse();
