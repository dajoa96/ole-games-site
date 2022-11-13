import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regular-switch',
  templateUrl: './regular-switch.component.html',
  styleUrls: ['./regular-switch.component.scss']
})
export class RegularSwitchComponent implements OnInit {
  @Output('onSwitch') onSwitch: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.status = !this.status;
    this.onSwitch.emit(this.status);
  }

}
