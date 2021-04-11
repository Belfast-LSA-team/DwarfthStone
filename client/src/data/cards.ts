export type stockCard = {
	id: number,
	type: string,
	name: string,
	description: string,
	cost: number;
	health: number;
	attack: number;
	imageFull: string;
	imageFight: string;
}

import Card1 from "../assets/images/game/full-card/card_1.png";
import Card2 from "../assets/images/game/full-card/card_2.png";
import Card3 from "../assets/images/game/full-card/card_3.png";
import Card4 from "../assets/images/game/full-card/card_4.png";
import Card5 from "../assets/images/game/full-card/card_5.png";
import Card6 from "../assets/images/game/full-card/card_6.png";
import Card7 from "../assets/images/game/full-card/card_7.png";
import Card8 from "../assets/images/game/full-card/card_8.png";
import Card9 from "../assets/images/game/full-card/card_9.png";
import Card10 from "../assets/images/game/full-card/card_10.png";

import Card1Fight from "../assets/images/game/fight-card/card_1_fight.png";
import Card2Fight from "../assets/images/game/fight-card/card_2_fight.png";
import Card3Fight from "../assets/images/game/fight-card/card_3_fight.png";
import Card4Fight from "../assets/images/game/fight-card/card_4_fight.png";
import Card5Fight from "../assets/images/game/fight-card/card_5_fight.png";
import Card6Fight from "../assets/images/game/fight-card/card_6_fight.png";
import Card7Fight from "../assets/images/game/fight-card/card_7_fight.png";
import Card8Fight from "../assets/images/game/fight-card/card_8_fight.png";
import Card9Fight from "../assets/images/game/fight-card/card_9_fight.png";
import Card10Fight from "../assets/images/game/fight-card/card_10_fight.png";


import Card1Dead from "../assets/images/game/dead-card/card_1_dead.png";
import Card2Dead from "../assets/images/game/dead-card/card_2_dead.png";
import Card3Dead from "../assets/images/game/dead-card/card_3_dead.png";
import Card4Dead from "../assets/images/game/dead-card/card_4_dead.png";
import Card5Dead from "../assets/images/game/dead-card/card_5_dead.png";
import Card6Dead from "../assets/images/game/dead-card/card_6_dead.png";
import Card7Dead from "../assets/images/game/dead-card/card_7_dead.png";
import Card8Dead from "../assets/images/game/dead-card/card_8_dead.png";
import Card9Dead from "../assets/images/game/dead-card/card_9_dead.png";
import Card10Dead from "../assets/images/game/dead-card/card_10_dead.png";

export const stockCards = [
	{
		"id": 1,
		"type": "character",
		"name": "Robin Goodsha",
		"description": "Just couple of words about me,  can’t dance but ability to make Margarita on a high Level.",
		"cost": 3,
		"health": 8,
		"attack": 4,
		"imageFull": Card1,
		"imageFight": Card1Fight,
		"imageFightDead": Card1Dead
	},
	{
		"id": 2,
		"type": "character",
		"name": "Titanium JR.",
		"description": "Young grand master of enemy.  Won olympic games in 1265. Still sleeping with his teddy bear.",
		"cost": 5,
		"health": 4,
		"attack": 7,
		"imageFull": Card2,
		"imageFight": Card2Fight,
		"imageFightDead": Card2Dead

	},
	{
		"id": 3,
		"type": "character",
		"name": "Golem Edward",
		"description": "He is slow, but to stronggg. Rich guy, in his parking he has Chevrolet Camaro 1967y",
		"cost": 3,
		"health": 12,
		"attack": 3,
		"imageFull": Card3,
		"imageFight": Card3Fight,
		"imageFightDead": Card3Dead

	},
	{
		"id": 4,
		"type": "character",
		"name": "Lord Amstrong",
		"description": "Lord, living in a castle, probably you heard about him some not nice words, but meantime, He is doing good things. He is a teacher in school",
		"cost": 2,
		"health": 7,
		"attack": 8,
		"imageFull": Card4,
		"imageFight": Card4Fight,
		"imageFightDead": Card4Dead
	},
	{
		"id": 5,
		"type": "character",
		"name": "Laura Great",
		"description": "Really love to read, spending hours with book in her hands. Good player in bridge.",
		"cost": 5,
		"health": 6,
		"attack": 10,
		"imageFull": Card5,
		"imageFight": Card5Fight,
		"imageFightDead": Card5Dead

	},
	{
		"id": 6,
		"type": "character",
		"name": "Henry IX",
		"description": "Spend some time in magic guide. Didn’t finish Self learner. Looking for a job",
		"cost": 5,
		"health": 8,
		"attack": 9,
		"imageFull": Card6,
		"imageFight": Card6Fight,
		"imageFightDead": Card6Dead

	},

	{
		"id": 7,
		"type": "character",
		"name": "Ursula",
		"description": "Warior, with huge expirience.",
		"cost": 4,
		"health": 12,
		"attack": 7,
		"imageFull": Card7,
		"imageFight": Card7Fight,
		"imageFightDead": Card7Dead

	},
	{
		"id": 8,
		"type": "character",
		"name": "Landergof",
		"description": "Hard worker, nice singer.",
		"cost": 7,
		"health": 8,
		"attack": 11,
		"imageFull": Card8,
		"imageFight": Card8Fight,
		"imageFightDead": Card8Dead

	},
	{
		"id": 9,
		"type": "character",
		"name": "Switsha",
		"description": "Miner.",
		"cost": 3,
		"health": 10,
		"attack": 11,
		"imageFull": Card9,
		"imageFight": Card9Fight,
		"imageFightDead": Card9Dead

	},
	{
		"id": 10,
		"type": "character",
		"name": "Wispy",
		"description": "Main monster",
		"cost": 8,
		"health": 20,
		"attack": 5,
		"imageFull": Card10,
		"imageFight": Card10Fight,
		"imageFightDead": Card10Dead

	}
]