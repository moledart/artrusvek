export interface NewsPostType {
  briefInfo: string;
  date: string;
  id: string;
  name: string;
  published: Date;
  slug: string;
  source: string;
  tag: string;
  thumbnail: string;
  uid: string;
}

interface Socials {
  fbLink: string;
  igLink: string;
  vkLink: string;
  link: string;
}

export interface ActorType {
  photo: string;
  birthday: string;
  description: string;
  education: string;
  id: string;
  name: string;
  playedIn: string[];
  role: string;
  slug: string;
  sortId: number;
  uid: string;
  socials: Socials;
}

export interface PlayType {
  actors: string[];
  briefInfo: string;
  description: string;
  genre: string;
  id: string;
  igLink: string;
  length: string;
  name: string;
  photos: string[];
  rating: string;
  slug: string;
  sortId: string;
  thumbnail: string;
  uid: string;
  youtubeLink: string;
}
