import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ole Games - Contacto');
  }

}
