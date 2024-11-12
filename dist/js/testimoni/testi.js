const testimonials = [
    {
      text: "MiningFix Solution telah membantu kami dalam pengembangan tambang dengan pendekatan yang ramah lingkungan dan efisien, sangat merekomendasikan.",
      image: "dist/img/testi/1.jpg",
      name: "Jonas Blue",
      role: "CEO Media",
    },
    {
      text: "The team was very professional and helped us find the right solution for our needs. Highly recommend!",
      image: "dist/img/testi/2.jpg",
      name: "Sarah Smith",
      role: "Marketing Director",
    },
    {
      text: "Exceptional service and support throughout our project. We couldn't be happier with the outcome.",
      image: "dist/img/testi/3.jpg",
      name: "Michael Lee",
      role: "Project Manager",
    },
  ];

  let currentIndex = 0;

  function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    document.getElementById("testimonial-text").innerText =
      testimonial.text;
    document.getElementById("testimonial-image").src = testimonial.image;
    document.getElementById("testimonial-name").innerText =
      testimonial.name;
    document.getElementById("testimonial-role").innerText =
      testimonial.role;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
  }

  function showPrev() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  }

  // Initialize with the first testimonial
  updateTestimonial();