export interface Kid {
    id: number;
    name: string;
    data: Array<Activity>;
}
 
export interface Activity {
    type: string;
    date: any;
    result: boolean;
}