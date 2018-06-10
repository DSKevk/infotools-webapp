import { Person } from './person';

export interface Client extends Person {
    address: string;
}
