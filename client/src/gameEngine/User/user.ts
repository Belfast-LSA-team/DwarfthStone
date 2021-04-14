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
	userStockCard?: stockCard[];
	fightDeck?: stockCard[];
	isFightedDeck?: stockCard[];
};

export const userInstance = (name: string, id: string, userStockCard: stockCard[], userPic?: ImageBitmap) => {
	return {
		id,
		name,
		mana: 1,
		health: 9,
		deck: [],
		imageProfile: userPic ? userPic : userPicDefault,
		userStockCard: userStockCard,
		fightDeck: [],
		isFightedDeck: []
	};
}
const USER_PIC_DATA = {
	width: 128,
	height: 124
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

		wrapperImg.onload = () => {
			context!.imageSmoothingEnabled = false;
			context!.drawImage(
				wrapperImg,
				180,
				370,
				wrapperImg.naturalWidth,
				wrapperImg.naturalHeight
			);



			userPic.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userPic,
					200,
					390,
					userPic.naturalWidth,
					userPic.naturalHeight
				);
				userHealth.onload = () => {
					context!.imageSmoothingEnabled = false;
					context!.drawImage(
						userHealth,
						300,
						490,
						userHealth.naturalWidth,
						userHealth.naturalHeight
					);
				};
				userMana.onload = () => {
					context!.imageSmoothingEnabled = false;
					context!.drawImage(
						userMana,
						180,
						490,
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
				190,
				wrapperImg.naturalWidth,
				wrapperImg.naturalHeight
			);
			userPic.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userPic,
					200,
					210,
					userPic.naturalWidth,
					userPic.naturalHeight
				);
			};
			userMana.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userMana,
					180,
					310,
					userMana.naturalWidth,
					userMana.naturalHeight
				);
			};
			userHealth.onload = () => {
				context!.imageSmoothingEnabled = false;
				context!.drawImage(
					userHealth,
					300,
					310,
					userHealth.naturalWidth,
					userHealth.naturalHeight
				);
			};
		};

	}
	return { user: userProfile, top: current ? 390 : 210, left: 200, width: USER_PIC_DATA.width, height: USER_PIC_DATA.width };
}

export const addMana = (userData: UserGame, canvas: HTMLCanvasElement, current: boolean) => {
	const context = canvas.getContext('2d');
	const userMana = new Image();
	userMana.src = userNumbersMana(userData.mana.toString());

	console.log(current);

	userMana.onload = () => {
		context!.imageSmoothingEnabled = false;
		context!.drawImage(
			userMana,
			180,
			current ? 490 : 310,
			userMana.naturalWidth,
			userMana.naturalHeight
		);
	};
	context?.save();

}
export const useMana = (userData: UserGame, canvas: HTMLCanvasElement, current: boolean) => {
	const context = canvas.getContext('2d');
	const userMana = new Image();
	userMana.src = userNumbersMana(userData.mana.toString());

	console.log(current);

	userMana.onload = () => {
		context!.imageSmoothingEnabled = false;
		context!.drawImage(
			userMana,
			180,
			current ? 490 : 310,
			userMana.naturalWidth,
			userMana.naturalHeight
		);
	};
	context?.save();

}

export const setUserHealth = (userData: UserGame, canvas: HTMLCanvasElement, current: boolean) => {
	const context = canvas.getContext('2d');
	const userHealth = new Image();
	userHealth.src = userNumbersHealth(userData.health.toString());

	console.log(current);

	userHealth.onload = () => {
		context!.imageSmoothingEnabled = false;
		context!.drawImage(
			userHealth,
			300,
			current ? 490 : 310,
			userHealth.naturalWidth,
			userHealth.naturalHeight
		);
	};
	context?.save();






}