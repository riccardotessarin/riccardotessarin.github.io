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

	
function showDialog(title, description) {
	document.getElementById('dialogTitle').innerText = title;
	document.getElementById('dialogDescription').innerText = description;
	document.getElementById('projectDialog').style.display = 'flex';
}

function closeDialog() {
	document.getElementById('projectDialog').style.display = 'none';
}



let observer;
const screenSizePixel = 600;

// Function to initialize the Intersection Observer if on mobile
function initializeObserverForMobile() {
	// If already initialized, skip
	if (observer || window.innerWidth > screenSizePixel) return;

	// Select all .article-container elements
	const articles = document.querySelectorAll('.article-container');

	// Create an Intersection Observer
	observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			// Check if the element is intersecting near the center of the viewport
			if (entry.isIntersecting) {
				entry.target.classList.add('hover-effect'); // Apply the effect
			} else {
				entry.target.classList.remove('hover-effect'); // Remove the effect
			}
		});
	}, {
		root: null, // Use the viewport as the root
		rootMargin: '0px 0px -50% 0px', // Adjust to trigger near the center
		threshold: 0.5 // 50% of the element must be visible to trigger
	});

	// Observe each article
	articles.forEach(article => {
		observer.observe(article);
	});
}

if (window.innerWidth <= screenSizePixel) {
	initializeObserverForMobile();
}

window.addEventListener('resize', () => {
	// Clear any existing hover effects if switching to desktop
	if (observer && window.innerWidth > screenSizePixel) {
		observer.disconnect(); // Stop observing on larger screens
		observer = null; // Reset the observer
		document.querySelectorAll('.article-container').forEach(article => {
			article.classList.remove('hover-effect');
		});
	} else {
		// Initialize the observer again if resizing back to mobile
		initializeObserverForMobile();
	}
});