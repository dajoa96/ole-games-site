import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PersonleListMock } from 'src/app/mocks/personel-list.mock';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personel: any[] = PersonleListMock;

  constructor(
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Ole Games - Contacto');
  }

}
