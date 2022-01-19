import "../scss/style.scss";

const nav = document.querySelector(".navbar");

nav.addEventListener("click", (event) => {
  const target = event.target;
  const data = target.dataset.type;
  scrollInto(data);
});

function scrollInto(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
