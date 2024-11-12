document.addEventListener("DOMContentLoaded", () => {
    const counters = [
      { id: "counter1", target: 512, duration: 2000 },
      { id: "counter2", target: 52, duration: 2000 },
      { id: "counter3", target: 1120, duration: 2000 },
      { id: "counter4", target: 1520, duration: 2000 },
    ];

    counters.forEach((counter) => {
      const element = document.getElementById(counter.id);
      let count = 0;
      const increment = counter.target / (counter.duration / 10);

      function updateCounter() {
        count += increment;
        if (count >= counter.target) {
          element.innerText = counter.target;
        } else {
          element.innerText = Math.floor(count);
          setTimeout(updateCounter, 10);
        }
      }

      updateCounter();
    });
  });
