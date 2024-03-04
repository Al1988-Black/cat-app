export interface Cat {
    id: string;
    name: string;
    breed: string;
    habit: string;
    description: string;
    image: string;
}

export interface CatSchema {
    data?: Cat;
    isLoading: boolean;
    error?: string;
}
