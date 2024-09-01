import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
 public heroNames: string[] = ["Pedro", "Sara", "Victoria", "Milagros", "Damian"]
 public deletedHero? : string;

 removeLastHero():void{
  this.deletedHero =  this.heroNames.pop();
 }

}
