export interface Review {
	id: string;
	rating: number;
	comment: string;
	userId: string;
	userName: string;
	date: string;
}

export interface Flashcard {
	id: string;
	front: string;
	back: string;
	difficulty: "iniciante" | "intermediario" | "avancado";
	note: string;
}

export interface FlashcardSet {
	reviews: Review[];
	averageRating: number;
	numberOfReviews: number;
	id: string;
	title: string;
	slug: string;
	description: string;
	tags: string[];
	price: number;
	isFeatured: boolean;
	cardCount: number;
	language?: string;
	imageUrl: string;
	category:
		| "linguagens"
		| "matematica"
		| "ciencias"
		| "historia"
		| "medicina"
		| "negocios"
		| "programacao"
		| "artes";
	difficulty: "iniciante" | "intermediario" | "avancado";
	details: string;
	content: {
		section: string;
		description: string;
		topics?: string[];
		cardCount: number;
	}[];
	sampleCards: {
		front: string;
		back: string;
		difficulty: "iniciante" | "intermediario" | "avancado";
		note: string;
	}[];
	discount?: number;
	createdAt: string;
	updatedAt: string;
}

export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	content: string;
	slug: string;
	author: {
		name: string;
		avatar: string;
		bio: string;
	};
	date: string;
	readTime: string;
	category: string;
	tags: string[];
	imageUrl: string;
	relatedPosts: { id: string; title: string; slug: string }[];
	likes: number;
	views: number;
	metaDescription: string;
	keywords: string[];
}
