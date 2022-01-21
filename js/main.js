const nav = document.querySelector(".navbar");
const navHeight = nav.getBoundingClientRect().height;

nav.addEventListener("click", (event) => {
  const target = event.target;
  const data = target.dataset.type;
  if (data == null) {
    return;
  }
  scrollInto(data);
});

document.addEventListener("scroll", () => {
  if (window.scrollY > navHeight) {
    nav.classList.add("navbar--dark");
  } else {
    nav.classList.remove("navbar--dark");
  }
});

const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollInto(".home");
});

// Project를 눌렀을때 그것만 보여주는 기능
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  // work부분에서 새로 버튼 클릭시 (ex.mysuni,visang ...) 포커스 맞추기
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
  // 위에 forEach(project)는
  // let project;
  // for(let i = 0; i < projects.length; i++) {
  //     project = projects[i];
  // }
  // 와 같은 의미 같은 코드임.

  console.log(filter);
});

//  scroll func
function scrollInto(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
