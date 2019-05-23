import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sudoku';
  btn_disable:boolean=false;
  check_complete_error: boolean = false;
  message: string = "abcd"
  interval;
  timestart:number =0;
  gameChance:number=3;
  valuesRequire:number=45;
  valuesprovidedList: any=[];
  ngOnInit(){
    this.interval = setInterval(() => {
      this.timestart++
    },1000)
  }


  @HostListener('window:focus', ['$event'])
  onFocus(event: FocusEvent): void {
    if(!this.check_complete_error){
      this.interval = setInterval(() => {
        this.timestart++
      },1000)     
    }

  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: FocusEvent): void {
     clearInterval(this.interval);
  }
  
  decreaseChance(invalid_value,dirty_value,cell_id) {
    if(invalid_value && dirty_value){
      if(this.valuesprovidedList.includes(cell_id)){
        this.valuesprovidedList.pop(cell_id)  
        this.valuesRequire++;
        }
    this.gameChance--;
    }
    else if(!invalid_value && dirty_value){
      if(!this.valuesprovidedList.includes(cell_id)){
      this.valuesprovidedList.push(cell_id)  
      this.valuesRequire--;
      }
    }
    if(this.gameChance==0){
      this.check_complete_error = true
      this.message = "You have done 3 mistakes. Your game is over and taken time is " + this.timestart + " seconds. Thanks for playing !!!!";
      this.btn_disable=true;
      clearInterval(this.interval);
    }
  }

  onSubmit(){
    if(this.valuesRequire == 0){
      this.check_complete_error = true
      this.message = "Well Done !!!! Your time taken is " + this.timestart + " seconds";
      this.btn_disable = true;
      clearInterval(this.interval);
    }
    else{
      alert("Values still require. You still have " + this.gameChance + " mistakes left.")
    }
  }

  userModel = new User(
    null,null,null,2,6,null,7,null,1,
    6,8,null,null,7,null,null,9,null,
    1,9,null,null,null,4,5,null,null,
    
    8,2,null,1,null,null,null,4,null,
    null,null,4,6,null,2,9,null,null,
    null,5,null,null,null,3,null,2,8,
    
    null,null,9,3,null,null,null,7,4,null,4,null,null,5,null,null,3,6,
    7,null,3,null,1,8,null,null,null)

}
