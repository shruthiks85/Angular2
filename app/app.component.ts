import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
            
})
export class AppComponent  { 
  title: string = 'interpolation example';
  name = 'Angular';
  paragraphTitle:string = 'This appears as a tooltip';
  isButtonDisabled:boolean = true;
  
  companyName:string = 'Wipro';

  getTitle():string{
    return this.title;
  }
 }
