export function scaleGame() {
	const container = document.querySelector(".game-container");
	const iframe = document.querySelector(".game-iframe");

	if (!container || !iframe) return;

	const baseWidth = 390;
	const scale = container.clientWidth / baseWidth;

	iframe.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleGame);
