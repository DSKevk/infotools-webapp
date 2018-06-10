import { Client } from './client';
import { Commercial } from './commercial';

export interface RendezVous {
    client: Client;
    commercial: Commercial;
    date: Date;
    status?: string;
}
