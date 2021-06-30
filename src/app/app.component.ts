import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  userdate = '';
  useramount = 0;
  userkm = 0;
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.userdate = value;
  }
  onCurrencyChange(value: string) {
    let parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.useramount = parsedValue;
    }
  }
  onMilesChange(value: string) {
    let parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.userkm = parsedValue;
    }
  }
}
