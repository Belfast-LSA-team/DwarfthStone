import { stockCard } from '../../data/cards';
import userPicDefault from '../../assets/images/game/default-user.png';
import userPicWrapper from '../../assets/images/game/profile-pic-wrapper.png';
import { userNumbersHealth, userNumbersMana } from '../../data/numbers';

export type UserGame = {
	id: string;
	name: string;
	mana: number;
	health: number;
	deck: stockCard[];
	imageProfile: string;
};

export const userInstance = (name: string, id: string, userPic?: ImageBitmap) => {
	return {
		id,
		name,
		mana: 1,
		health: 9,
		deck: [],
		imageProfile: userPic ? userPic : userPicDefault
	};
}

export const userPics = (userProfile: UserGame, canvas: HTMLCanvasElement, current: boolean) => {

	const context = canvas.getContext('2d');

	const wrapperImg = new Image();
	const userPic = new Image();
	const userMana = new Image();
	const userHealth = new Image();



	wrapperImg.src = userPicWrapper;
	userPic.src = userProfile.imageProfile;
	userMana.src = userNumbersMana(userProfile.mana.toString());
	userHealth.src = userNumbersHealth(userProfile.health.toString())


	if (current) {
		console.log(userProfile.mana);

		wrapperImg.onload = () => {
			context!.imageSmoothingEnabled = false;
			context!.drawImage(
				wrapperImg,
				180,
				340,
				wrapperImg.naturalWidth,
				wrapperImg.naturalHeight
			);



			userPic.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userPic,
					200,
					360,
					userPic.naturalWidth,
					userPic.naturalHeight
				);
				userHealth.onload = () => {
					context!.imageSmoothingEnabled = false;
					context!.drawImage(
						userHealth,
						300,
						460,
						userHealth.naturalWidth,
						userHealth.naturalHeight
					);
				};
				userMana.onload = () => {
					context!.imageSmoothingEnabled = false;
					context!.drawImage(
						userMana,
						180,
						460,
						userMana.naturalWidth,
						userMana.naturalHeight
					);
				};

			};



		};

	} else {
		wrapperImg.onload = () => {
			context!.imageSmoothingEnabled = false;
			context!.drawImage(
				wrapperImg,
				180,
				160,
				wrapperImg.naturalWidth,
				wrapperImg.naturalHeight
			);
			userPic.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userPic,
					200,
					180,
					userPic.naturalWidth,
					userPic.naturalHeight
				);
			};
			userMana.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userMana,
					180,
					280,
					userMana.naturalWidth,
					userMana.naturalHeight
				);
			};
			userHealth.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userHealth,
					300,
					280,
					userHealth.naturalWidth,
					userHealth.naturalHeight
				);
			};
		};

	}

}