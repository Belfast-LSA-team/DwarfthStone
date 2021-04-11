
export const ArrowHandler = (canvas: HTMLCanvasElement, userPosition: string) => {

	const ctx = canvas.getContext('2d');
	const ctxShadow = canvas.getContext('2d');

	if (ctx) {
		const arrow = new Path2D();
		const arrowShadow = new Path2D();
		ctx!.beginPath();
		// arrow.moveTo(175, 450);
		// arrow.lineTo(155, 470);
		// arrow.lineTo(155, 430);
		if (userPosition === 'top') {
			arrow.moveTo(175, 280);
			arrow.lineTo(155, 300);
			arrow.lineTo(155, 260);

		} else {

			arrow.moveTo(175, 450);
			arrow.lineTo(155, 470);
			arrow.lineTo(155, 430);

		}
		ctx.fillStyle = "#313e2d";

		ctx!.fill(arrow);
		ctx!.closePath();


		ctxShadow!.beginPath();

		// arrowShadow.moveTo(175, 280);
		// arrowShadow.lineTo(155, 300);
		// arrowShadow.lineTo(155, 260);
		if (userPosition === 'top') {

			arrowShadow!.moveTo(175, 450);
			arrowShadow!.lineTo(155, 470);
			arrowShadow!.lineTo(155, 430);
		} else {
			arrowShadow.moveTo(175, 280);
			arrowShadow.lineTo(155, 300);
			arrowShadow.lineTo(155, 260);
		}

		ctxShadow!.fillStyle = "#3A2411";

		ctxShadow!.fill(arrowShadow);
		ctxShadow!.closePath();


	}
};