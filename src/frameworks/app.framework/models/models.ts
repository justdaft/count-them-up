export interface Kid {
    id: number;
    name: string;
    age: number;
    activities: Array<any>;
}
 
export interface Activity {
    type: string;
    data: Array<any>;
}

export interface CardDetail {
    cardTitle: string;
    cardSubtitle?: string;
    cardContent?: string;
    cardImage?: string;
    cardAvatar?: string;
}
