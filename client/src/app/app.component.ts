import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private httpClient = inject(HttpClient);
  result = '';

  ngOnInit(): void {
    this.httpClient.get('http://localhost:3020/').subscribe((d) => {
      console.log(d);
      this.result = d.toString();
    });
  }

  title = 'client';
}
