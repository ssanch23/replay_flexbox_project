document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".previous-section");
  const container = section.querySelector(".film-container");
  const films = [...container.querySelectorAll(".film")];
  const showMoreBtn = section.querySelector(".show-more-btn");
  const showLessBtn = section.querySelector(".show-less-btn");

  function hideExtraRows() {
    const firstTop = films[0].offsetTop;

    films.forEach(film => {
      if (film.offsetTop > firstTop) {
        film.classList.add("hidden");
      } else {
        film.classList.remove("hidden");
      }
    });

    showMoreBtn.classList.remove("hidden-btn");
    showLessBtn.classList.add("hidden-btn");
  }

  function showAllRows() {
    films.forEach(film => film.classList.remove("hidden"));
    showMoreBtn.classList.add("hidden-btn");
    showLessBtn.classList.remove("hidden-btn");
  }

  hideExtraRows();

  showMoreBtn.addEventListener("click", showAllRows);
  showLessBtn.addEventListener("click", hideExtraRows);

  window.addEventListener("resize", hideExtraRows);
});