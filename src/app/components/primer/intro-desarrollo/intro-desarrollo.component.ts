import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-desarrollo',
  templateUrl: './intro-desarrollo.component.html',
  styleUrls: ['./intro-desarrollo.component.css']
})
export class IntroDesarrolloComponent {
  public contador8:number =0;
  public counter8(){
    this.contador8++;
  }
  public contador9:number =0;
  public counter9(){
    this.contador9++;
  }
  public contador10:number =0;
  public counter10(){
    this.contador10++;
  }
  public contador11:number =0;
  public counter11(){
    this.contador11++;
  }
}
