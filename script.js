function toggleMenu() {
	const menu = document.querySelector('.menu-links');
	const icon = document.querySelector('.hamburger-icon');
	menu.classList.toggle('open');
	icon.classList.toggle('open');
}

// Dark-Light Mode switcher

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");
const invertableIcons = document.querySelectorAll(".invertable");
const emailLink = document.getElementById("email-link");

if (currentTheme === "dark") {
	setDarkMode();

}

btn.addEventListener("click", function () {
	setTheme();
});

btn2.addEventListener("click", function () {
	setTheme();
});

function setTheme() {
	let currentTheme = document.body.getAttribute("theme");
	if (currentTheme === "dark") {
		setLightMode();
	} else {
		setDarkMode();
	}
}

function setDarkMode() {
	document.body.setAttribute("theme", "dark");
	localStorage.setItem("theme", "dark");
	themeIcons.forEach((icon) => {
		icon.src = icon.getAttribute("src-dark");
	});
	invertableIcons.forEach((icon) => {
		icon.classList.add("inverted");
	});
}

function setLightMode() {
	document.body.removeAttribute("theme");
	localStorage.setItem("theme", "light");
	themeIcons.forEach((icon) => {
		icon.src = icon.getAttribute("src-light");
	});
	invertableIcons.forEach((icon) => {
		icon.classList.remove("inverted");
	});
}

emailLink.addEventListener("click", function() {
	const emailUser = "riccardotex";
	const emailDomain = "gmail.com";
	emailLink.href = `mailto:${emailUser}@${emailDomain}`;
	setTimeout(() => {
		emailLink.href = "masked-email";
	}, 1000);	// Small delay to allow the mailto action to occur before resetting
});