const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navList = document.querySelectorAll(".nav__list");
const buyButton = document.querySelector(".buy-btn");

menuBtn.addEventListener("click", () => {
	document.body.classList.toggle("menu-btn-open");
	document.body.classList.toggle("nav-open");
	document.body.classList.toggle("buy-btn-open");
});

navList.forEach((link) => {
	link.addEventListener("click", () => {
		document.body.classList.remove("menu-btn-open");
	});
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
	link.addEventListener("click", () => {
		document.body.classList.remove("buy-btn-open");
	});
});
