import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  selectedType: string;
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  editingOption: boolean = false;
  newOption: string = '';

  onTypeChange() {
    if (this.selectedType !== 'single' && this.selectedType !== 'multi') {
      this.editingOption = false;
    }
  }

  editOption() {
    this.editingOption = true;
    this.newOption = '';
  }

  addOption() {
    if (this.newOption.trim() !== '') {
      this.options.push(this.newOption);
      this.newOption = '';
      this.editingOption = false;
    }
  }

  cancelOption() {
    this.editingOption = false;
    this.newOption = '';
  }
}
