// JavaScript for Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

// Fungsi untuk menampilkan kartu berdasarkan filter yang dipilih
function filterProjects(selectedFilter) {
  projectCards.forEach((card) => {
    if (
      selectedFilter === "all" ||
      card.getAttribute("data-category") === selectedFilter
    ) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // Update styling tombol aktif
  filterButtons.forEach((btn) =>
    btn.classList.remove(
      "text-yellow-500",
      "border-b-2",
      "border-yellow-500",
      "font-semibold"
    )
  );
  const activeButton = document.querySelector(
    `.filter-btn[data-filter="${selectedFilter}"]`
  );
  if (activeButton) {
    activeButton.classList.add(
      "text-yellow-500",
      "border-b-2",
      "border-yellow-500",
      "font-semibold"
    );
  }
}

// Fungsi untuk menyimpan filter ke localStorage
function saveFilter(selectedFilter) {
  localStorage.setItem("selectedFilter", selectedFilter);
}

// Event listener untuk setiap tombol filter
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    filterProjects(filter);
    saveFilter(filter);
  });
});

// Saat halaman dimuat, ambil filter dari localStorage atau default ke "all"
document.addEventListener("DOMContentLoaded", () => {
  const savedFilter = localStorage.getItem("selectedFilter") || "all";
  filterProjects(savedFilter);
});