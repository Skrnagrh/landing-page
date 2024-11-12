 // Active Nabbar

 var homeLink = document.getElementById("homeLink");
 var companyLink = document.getElementById("companyLink");
 var solutionLink = document.getElementById("solutionLink");
 var projectLink = document.getElementById("projectLink");
 var featuresLink = document.getElementById("featuresLink");
 var blogLink = document.getElementById("blogLink");
 var contactLink = document.getElementById("contactLink");

 // Mendapatkan elemen #company, #solution, #project, #features, #blog, dan #contact
 var companySection = document.getElementById("company");
 var solutionSection = document.getElementById("solution");
 var projectSection = document.getElementById("project");
 var featuresSection = document.getElementById("features");
 var blogSection = document.getElementById("blog");
 var contactSection = document.getElementById("contact");

 // Mengecek URL halaman saat ini
 var currentPage = window.location.pathname;

 // Mengecek status elemen aktif dari penyimpanan sesi
 var activeElement = sessionStorage.getItem("activeElement");

 // Jika halaman saat ini adalah index.html atau root, set homeLink sebagai aktif
 if (currentPage === "/" || currentPage.endsWith("index.html")) {
   setActiveElement("homeLink");
 } else if (activeElement) {
   document.getElementById(activeElement).classList.add("active");
 }

 // Menambahkan event listener untuk menangkap saat pengguna men-scroll
 window.addEventListener("scroll", function () {
   // Mendapatkan posisi (offset) dari masing-masing elemen
   var companySectionOffset = companySection.offsetTop;
   var solutionSectionOffset = solutionSection.offsetTop;
   var projectSectionOffset = projectSection.offsetTop;
   var featuresSectionOffset = featuresSection.offsetTop;
   var blogSectionOffset = blogSection.offsetTop;
   var contactSectionOffset = contactSection.offsetTop;

   // Mendapatkan posisi (offset) dari titik tengah layar
   var screenHeight = window.innerHeight / 2;

   // Menentukan apakah pengguna men-scroll ke bawah elemen masing-masing
   if (window.scrollY < companySectionOffset - screenHeight) {
     setActiveElement("homeLink");
   } else if (
     window.scrollY > companySectionOffset - screenHeight &&
     window.scrollY < solutionSectionOffset - screenHeight
   ) {
     setActiveElement("companyLink");
   } else if (
     window.scrollY > solutionSectionOffset - screenHeight &&
     window.scrollY < projectSectionOffset - screenHeight
   ) {
     setActiveElement("solutionLink");
   } else if (
     window.scrollY > projectSectionOffset - screenHeight &&
     window.scrollY < featuresSectionOffset - screenHeight
   ) {
     setActiveElement("projectLink");
   } else if (
     window.scrollY > featuresSectionOffset - screenHeight &&
     window.scrollY < blogSectionOffset - screenHeight
   ) {
     setActiveElement("featuresLink");
   } else if (
     window.scrollY > blogSectionOffset - screenHeight &&
     window.scrollY < contactSectionOffset - screenHeight
   ) {
     setActiveElement("blogLink");
   } else if (window.scrollY > contactSectionOffset - screenHeight) {
     setActiveElement("contactLink");
   } else {
     setActiveElement("homeLink");
   }
 });

 // Fungsi untuk menandai elemen sebagai aktif dan menyimpan ke penyimpanan sesi
 function setActiveElement(elementId) {
   // Menghapus kelas "active" dari semua elemen navigasi
   [
     homeLink,
     companyLink,
     solutionLink,
     projectLink,
     featuresLink,
     blogLink,
     contactLink,
   ].forEach(function (el) {
     el.classList.remove("active");
   });

   // Menambahkan kelas "active" pada elemen yang aktif
   document.getElementById(elementId).classList.add("active");

   // Menyimpan informasi elemen yang aktif ke penyimpanan sesi
   sessionStorage.setItem("activeElement", elementId);
 }