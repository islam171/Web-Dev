import {Component, computed, inject, output, signal} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {CategoryModel} from "../../models/category.model";

@Component({
  selector: 'app-filter-item',
  imports: [],
  templateUrl: './filter-item.html',
  styleUrl: './filter-item.css',
})
export class FilterItem {
    categoryData = inject(CategoryService)

    isOpen = signal(false)

    listClass = computed(() => this.getStatus() ? 'filterItem active' : 'filterItem')

    getStatus() {
        return this.isOpen()
    }

    close(){
        this.isOpen.set(false);
    }

    setStatus() {
        this.isOpen.update((status) => !status)
    }
    categoryAll = {id: 0, name: 'all', view: 'All'}
    selectedCategory: CategoryModel | null = this.categoryAll;
    selection = output<number>();

    select(s: CategoryModel) {
        this.selection.emit(s.id);
        this.selectedCategory = s;
        this.close();
    }

}
