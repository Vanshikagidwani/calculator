import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.scss']
})
export class CalComponent  {
  public num1!: number;
  public num2!: number;
  public result!: any;
  // data = "Ram and Syam";

sum(){
  
  this.result=this.num1+this.num2
  console.log(this.result)
}
subtract(){
  this.result=this.num1-this.num2

}

divide(){
this.result=(this.num1)/(this.num2)
}
multiply(){
  this.result=this.num1*this.num2
}
}
