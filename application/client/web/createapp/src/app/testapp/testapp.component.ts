import { Component, OnInit } from '@angular/core';
import { TestappService } from './testapp.service';

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.scss'],
})

export class TestappComponent implements OnInit {
    public test:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        test: '',
    }

    constructor (
        private testappService: TestappService,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.testappService.GpCreate(this.test).subscribe((data:any) => {
            this.test.name = ''
 	 	this.test.email = ''
 	 	this.test.test = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}