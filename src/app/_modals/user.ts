import { Activity } from "./activity.modal";

export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    height:string;
    weight:string;
    gender:string;
    token: string;
    activityType:Activity;
    dateOfBirth:string;
}

