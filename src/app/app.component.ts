import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDummy';
  data: any;
  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.data = data;
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 15]
        });
      }, 1);
    }),

      (error: any) => console.error(error);
  }
}