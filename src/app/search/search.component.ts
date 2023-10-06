import { Component, Output, EventEmitter,} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchTerm = new EventEmitter<string>();
  
  term = ''

  onSearch(event: string){
    this.term = event
    console.log(this.term)
  }
}
