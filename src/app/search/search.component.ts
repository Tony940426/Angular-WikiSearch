import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() submitted = new EventEmitter<string>();
  
  term = ''

  onSearch(event: string){
    this.term = event
  }

  onSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
