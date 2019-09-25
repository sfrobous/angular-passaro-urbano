import { Http } from '@angular/http';
import { Oferta, ComoUsar } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {   

    constructor(private http: Http) {}
    
    public getOfertas() : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorId(id: number) : Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json()[0]);
    }

    public getComoUsarOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json()[0].descricao);
    }

    public getOndeFicaOfertaPorId(id: number) : Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json()[0].descricao);
    }
}