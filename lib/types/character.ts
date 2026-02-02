export type Character = {
    id: number;
    name: string;
    description: string;
    avatarSrc: string;
};

export type CharacterFormData = {
    name: string;
    description: string;
    age?: string;
    gender?: string;
};
