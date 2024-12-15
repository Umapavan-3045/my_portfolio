// main.js
var typed = new Typed(".text", {
    strings: ["FullStack Developer", "App Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineIcons = document.querySelectorAll(".timeline-icon");
  
    const checkTimelineItems = () => {
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("animate");
          timelineIcons[index].classList.add("animate");
        }
      });
    };
  
    window.addEventListener("scroll", checkTimelineItems);
    checkTimelineItems();  // Run on page load to check initial position
  });
  