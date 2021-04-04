
export const onClickCanvas = (canvas: HTMLCanvasElement) => {
	canvas!.addEventListener("click", function (e) {
		// use event argument

		var rect = canvas!.getBoundingClientRect(); // get element's abs. position
		console.log(rect);
		var x = e.clientX - rect.left; // get mouse x and adjust for el.
		var y = e.clientY - rect.top;
		console.log(x, y);
	});
}