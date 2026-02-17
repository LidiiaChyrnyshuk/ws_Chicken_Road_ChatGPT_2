/* export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");

	if (!container || !iframe) return;

	const baseWidth = 490;
	const scale = container.clientWidth / baseWidth;

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleGame); */

export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");
	if (!container || !iframe) return;

	const width = window.innerWidth;
	let gameFullWidth, gameFullHeight;

	if (width >= 1024) {
		gameFullWidth = 450;
		gameFullHeight = 750;
	} else {
		gameFullWidth = 780;
		gameFullHeight = 960;
	}

	iframe.style.width = `${gameFullWidth}px`;
	iframe.style.height = `${gameFullHeight}px`;

	const scale = Math.min(
		container.clientWidth / gameFullWidth,
		container.clientHeight / gameFullHeight,
	);

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleGame);
scaleGame();
