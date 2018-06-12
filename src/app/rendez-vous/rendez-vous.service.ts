import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RendezVousService {

    readonly apiUrl = 'http://localhost:4201';

    constructor(private http: HttpClient) { }

    public getAllRendezVous() {
        const commercialID = JSON.parse(localStorage.getItem('user')).id;

        const response = this.http.get(`${this.apiUrl}/rdv/id_commercial=${commercialID}`);
        return response;
    }

    public getAllClients() {
        const response = this.http.get(`${this.apiUrl}/client/all`);
        return response;
    }

    public postNewRdv(clientID: number, inputDate: string) {
        const date = new Date(inputDate).toISOString();
        const commercialID = JSON.parse(localStorage.getItem('user')).id;
        const response = this.http.get(`${this.apiUrl}/rdv/post/date=${date}&id_client=${clientID}&id_commercial=${commercialID}`);
        return response;
    }

    public updateRdv(id: number, date: Date) {
        const formatedDate = new Date(date).toISOString();
        const response = this.http.get(`${this.apiUrl}/rdv/update/id=${id}&new_date=${formatedDate}`);
        return response;
    }

    public deleteRdv(rdvID: number) {
        const response = this.http.get(`${this.apiUrl}/rdv/delete/id=${rdvID}`);
        return response;
    }
}
