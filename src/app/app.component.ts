import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-WikiSearch';
  onTerm(term: string){
    console.log(`Connected ${term}`)
  }
}
