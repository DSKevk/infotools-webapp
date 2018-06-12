import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommandeService {

    readonly apiUrl = 'http://localhost:4201';

    constructor(private http: HttpClient) { }

    public getAllCommandes(clientID: number) {
        const response = this.http.get(`${this.apiUrl}/commande/id_client=${clientID}`);
        return response;
    }
}
