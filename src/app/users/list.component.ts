import { Component, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { first } from 'rxjs/operators';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { AccountService } from '@app/_services';
import { User } from '@app/_models';

@Component({ 
    templateUrl: 'list.component.html',
    standalone: true,
    imports: [
        RouterLink, NgFor, NgIf,
        MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule
    ]
})
export class ListComponent implements OnInit {

    users?: User[];
    dataSource: any;
    displayedColumns: string[] = ['id', 'first_name', 'last_name', 'username', 'role', 'status', 'action'];
    @ViewChild(MatPaginator) paginator !:MatPaginator;
    @ViewChild(MatSort) sort !:MatSort;
    
    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {
                this.users = users;
                this.dataSource = new MatTableDataSource<User>(this.users);
                this.dataSource.paginator=this.paginator;
                this.dataSource.sort=this.sort;
            });
    }

    filterChange(data: Event){
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }

    // deleteUser(id: string) {
    //     const user = this.users!.find(x => x.id === id);
    //     user.isDeleting = true;
    //         this.accountService.delete(id)
    //             .pipe(first())
    //             .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
        
    // }

}