import { Status } from "../enum/status.enum";

export interface Server {
    id: number;
    body: string;
    completed: boolean;
    status: Status;
}