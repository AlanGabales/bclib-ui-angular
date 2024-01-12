import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@app/environments/environment';
import { Category } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class CategoryService {

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<Category[]>(`${environment.apiUrl}/categorys`);
    }

    getAllEnabled() {
        return this.http.get<Category[]>(`${environment.apiUrl}/categorys/enabled`);
    }

    create(category: Category) {
        return this.http.post(`${environment.apiUrl}/categorys`, category);
    }

    getById(id: string) {
        return this.http.get<Category>(`${environment.apiUrl}/categorys/${id}`);
    }

    update(id: string, params: any) {
        return this.http.put(`${environment.apiUrl}/categorys/${id}`, params)
            .pipe(map(x => {
                return x;
            }));
    }
}