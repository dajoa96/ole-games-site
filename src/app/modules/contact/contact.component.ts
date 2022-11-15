import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personel: any[] = [
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    },
    {
      name: 'Nombre',
      picture: null,
      position: 'Cargo',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
