type Bundle = {
	id: string
	name: string;
	description: string;
	flashcards: number;
	price: number;
	discount: number;
	decks: string[];
};

const bundle1 = {
	id: "22d1e774",
	name: "Linguagens Essenciais",
	description: "Inclui todos os decks de Linguagens",
	flashcards: 880,
	price: 54.99,
	discount: 20,
	decks: ["Português", "Inglês", "Espanhol", "Francês", "Alemão"],
};
const bundle2 = {
	id: "4cd9a013",
	name: "Ciências Completo",
	description: "Inclui todos os decks de Ciências",
	flashcards: 1100,
	price: 68.99,
	discount: 15,
	decks: ["Matemática", "Física", "Química", "Biologia", "História"],
};
const bundle3 = {
	id: "5a41180c",
	name: "Matemática para Concursos",
	description: "Inclui todos os decks de Matemática",
	flashcards: 980,
	price: 54.99,
	discount: 20,
	decks: [
		"Álgebra",
		"Geometria",
		"Trigonometria",
		"Estatística",
		"Probabilidade",
	],
};
const bundle4 = {
	id: "6e5d1c2f",
	name: "História Geral e do Brasil",
	description: "Inclui todos os decks de História",
	flashcards: 1750,
	price: 109.99,
	discount: 15,
	decks: [
		"História Geral",
		"História do Brasil",
		"Geografia",
		"Economia",
		"Política",
		"Filosofia",
		"Sociologia",
		"Antropologia",
	],
};
const bundle5 = {
	id: "8f2b3c4d",
	name: "Medicina Avançada",
	description: "Inclui todos os decks de Medicina",
	flashcards: 1300,
	price: 104.99,
	discount: 20,
	decks: [
		"Anatomia",
		"Fisiologia",
		"Patologia",
		"Medicina Legal",
		"Farmacologia",
	],
};
const bundle6 = {
	id: "9g7h8i9j",
	name: "Negócios e Marketing",
	description: "Inclui todos os decks de Negócios",
	flashcards: 1100,
	price: 68.99,
	discount: 15,
	decks: [
		"Administração",
		"Economia",
		"Marketing",
		"Finanças",
		"Empreendedorismo",
	],
};
const bundle7 = {
	id: "10k11l12",
	name: "Programação Essencial",
	description: "Inclui todos os decks de Programação",
	flashcards: 1050,
	price: 74.99,
	discount: 15,
	decks: ["Java", "Python", "C++", "JavaScript", "Ruby"],
};
const bundle8 = {
	id: "13m14n15",
	name: "Cultura e Criatividade",
	description: "Inclui todos os decks de Artes",
	flashcards: 450,
	price: 28.99,
	discount: 20,
	decks: ["Artes Visuais", "Música"],
};

export const bundles: Bundle[] = [
	bundle1,
	bundle2,
	bundle3,
	bundle4,
	bundle5,
	bundle6,
	bundle7,
	bundle8,
];
