import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProduitService {

    readonly apiUrl = 'http://localhost:4201';

    constructor(private http: HttpClient) { }

    public getAllProduit() {
        const response = this.http.get(`${this.apiUrl}/product/all`);
        response.subscribe(res => console.log(res));
        return response;
    }
}
