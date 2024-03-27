import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //styleUrls es para agregarlo en un archivo por separado
    //igual que templateUrl o templates
    //styleUrls: ['./personas.component.css']
    //styles es inline
    styles: [`
        h1{
            color:blue;
        }
    `]
})
export class PersonasComponent{

}