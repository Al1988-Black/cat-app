export interface Liked {
    id: string;
    liked: boolean;
}

export interface LikedSchema {
    data?: Liked;
    isLoading: boolean;
    error?: string;
}
