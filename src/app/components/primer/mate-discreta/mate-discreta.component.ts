import { Component } from '@angular/core';

@Component({
  selector: 'app-mate-discreta',
  templateUrl: './mate-discreta.component.html',
  styleUrls: ['./mate-discreta.component.css']
})
export class MateDiscretaComponent {
  public contador12:number =0;
  public counter12(){
    this.contador12++;
  }
  public contador13:number =0;
  public counter13(){
    this.contador13++;
  }
  public contador14:number =0;
  public counter14(){
    this.contador14++;
  }
  public contador15:number =0;
  public counter15(){
    this.contador15++;
  }
}
