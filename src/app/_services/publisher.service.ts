import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Publisher } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class PublisherService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Publisher[]>(`${environment.apiUrl}/publishers`);
    }

    getAllEnabled() {
        return this.http.get<Publisher[]>(`${environment.apiUrl}/publishers/enabled`);
    }

    create(publisher: Publisher) {
        return this.http.post(`${environment.apiUrl}/publishers`, publisher);
    }

    getById(id: string) {
        return this.http.get<Publisher>(`${environment.apiUrl}/publishers/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/publishers/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}