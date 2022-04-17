import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  declare employees: Employee[];

  constructor() { }

  ngOnInit(): void {

    this.employees = [
      {
          "id": 1,
          "fullName": "Dean Christiananda",
          "address": "Jayapura",
          "email": "Dean@gmail.com",
          "phoneNumber": "081255556666",
          "role": "Software Engineer"
      },
      {
          "id": 2,
          "fullName": "Harbi Setyo Nugroho",
          "address": "Bekasi",
          "email": "harbisn5@gmail.com",
          "phoneNumber": "081266667777",
          "role": "Software Engineer"
      },
      {
          "id": 3,
          "fullName": "Ishak Febrianto",
          "address": "Malang",
          "email": "ishak@gmail.com",
          "phoneNumber": "081277778888",
          "role": "Software Engineer"
      }
  ]

  }

}
