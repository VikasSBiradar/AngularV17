import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GenderPipe } from '../pipes/gender.pipe';
import { PfPipe } from '../pipes/pf.pipe';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [NgFor,CurrencyPipe,GenderPipe,PfPipe],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
      employeeDetails : any = [
        {
          "EmployeeId" : "SN001",
          "Name" : "Adarsh gaurav",
          "Salary" : "20000",
          "Gender" : "Male"
        },
        {
          "EmployeeId" : "SN002",
          "Name" : "Vikas S Biradar",
          "Salary" : "10000",
          "Gender" : "Male"
        },
        {
          "EmployeeId" : "SN003",
          "Name" : "Swathi priya",
          "Salary" : "100000",
          "Gender" : "Female"
        },
        {
          "EmployeeId" : "SN004",
          "Name" : "Hemlatha Kumari",
          "Salary" : "200000",
          "Gender" : "Female"
        },
        {
          "EmployeeId" : "SN005",
          "Name" : "Zubair khan",
          "Salary" : "100000",
          "Gender" : "Male"
        },
      ];
}
