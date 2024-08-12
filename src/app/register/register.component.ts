import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }

  myFunction(): void {
    let country = ['India', 'USA', 'UK', 'Canada'];
    let select = document.getElementById('myDropdown');
    for (let i = 0; i < country.length; i++) {
      let option = document.createElement('option');
      option.text = country[i];
      select?.append(option);
    }
  }
}
