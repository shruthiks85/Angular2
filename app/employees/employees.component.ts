import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-emp',
  templateUrl: '/app/employees/employees.component.html',            
})

export class EmployeesComponent{
      title: string = 'employess list';
      //Iteration sample - using built in directive ngIf , ngFor
       employees: any[] = [
        {
          "empID":1,
          "name":'Ram'
        },
        {
          "empID":2,
          "name":'Shyam'
        }
      ];

      @Input() companyName:string;
}