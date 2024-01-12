import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Author } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthorService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Author[]>(`${environment.apiUrl}/authors`);
    }

    getAllEnabled() {
        return this.http.get<Author[]>(`${environment.apiUrl}/authors/enabled`);
    }

    create(author: Author) {
        return this.http.post(`${environment.apiUrl}/authors`, author);
    }

    getById(id: string) {
        return this.http.get<Author>(`${environment.apiUrl}/authors/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/authors/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}