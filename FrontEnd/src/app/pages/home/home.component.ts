import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  links = [
    { path: '/login', label: 'First' },
    { path: '/register', label: 'Second' }
    // Ajoutez d'autres liens ici
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
