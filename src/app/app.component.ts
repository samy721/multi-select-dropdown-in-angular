import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedOptionsText: string = '';
  options: { name: string; checked: boolean }[] = [
    { name: 'Option 1', checked: false },
    { name: 'Option 2', checked: false },
    { name: 'Option 3', checked: false },
    { name: 'Option 4', checked: false },
  ];
  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  onOptionChange() {
    this.selectedOptionsText = this.options
      .filter((option) => option.checked)
      .map((option) => option.name)
      .join(', ');
  }
}
