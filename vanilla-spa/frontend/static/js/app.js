import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const $app = document.querySelector(".app");

document.addEventListener("DOMContentLoaded", () => {
	addListeners();
	router();
});
const addListeners = () => {
    document.body.addEventListener("click", (event) => {
		if (event.target.matches("[data-link")) {
			event.preventDefault();
			navigateTo(event.target.href);
		}
	});
    window.addEventListener("popstate", router);
}
const router = async () => {
	const routes = [
		{ path: "/", view: Dashboard },
		{ path: "/posts", view: Posts },
		{ path: "/settings", view: Settings },
	];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);
	// const match = routes.filter(route => location.pathname === route.path)[0];
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

    const view = new match.route.view();
    $app.innerHTML = await view.getHTML();
};

const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

