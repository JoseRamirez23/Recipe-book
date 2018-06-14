import { Component,Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'header-lmnt',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();


    selectFeatures(feature:string){
        //we  need pass feature to appp component here
        this.featureSelected.emit(feature);
    }

}