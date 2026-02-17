import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HousingLocation} from "../../components/housing-location/housing-location";
import {HousingLocationInfo} from "../../models/housinglocation";
import {HousingService} from "../../services/housing.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
    template: `
        <section>
            <form >
                <input type="text" placeholder="Filter by city" #filter/>
                <button (click)="filterResults(filter.value)" class="primary" type="button">Search</button>
            </form>
        </section>
        <section class="results">
            @for(housingLocation of filteredHousingLocationList; track $index) {
               <app-housing-location [housingLocation]="housingLocation"/>
            }
        </section>
    `,
  imports: [HousingLocation, ReactiveFormsModule],
  styleUrl: './home.css',
})
export class Home {

    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    housingLocationList: HousingLocationInfo[] = [];
    housingService: HousingService = inject(HousingService);
    filteredHousingLocationList: HousingLocationInfo[] = this.housingLocationList;

    filterResults(text: string){
        if(!text){
            this.filteredHousingLocationList = this.housingLocationList;
            return
        }
        this.filteredHousingLocationList = this.housingLocationList.filter(item =>
            item?.city.toLowerCase().includes(text.toLowerCase())
        )
    }


    constructor() {
        this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocationInfo[])=>{
            this.housingLocationList = housingLocationList;
            this.filteredHousingLocationList = housingLocationList;
            this.changeDetectorRef.markForCheck();

        })
        this.filteredHousingLocationList = this.housingLocationList;
    }
}
