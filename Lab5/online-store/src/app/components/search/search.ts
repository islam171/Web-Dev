import {Component, output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-search',
    imports: [FormsModule, MatIcon, ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
    outputQuery = output<string>()
    searchQuery = "";


    setSearchQuery(): void {
        const query = this.searchQuery;
        this.outputQuery.emit(query); // Emit the data
    }
}
