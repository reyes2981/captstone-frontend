import { DataState } from "../enum/data-state.enum";

export interface AppState<T>{
    dateState: DataState;
    appDate?: T;
    error?: string;
}