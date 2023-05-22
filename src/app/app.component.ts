import { Component, ElementRef, HostListener } from '@angular/core';

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
  selectAllChecked: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.updateSelectAllState();
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleSelectAll() {
    for (let option of this.options) {
      option.checked = this.selectAllChecked;
    }
    this.onOptionChange();
  }

  onOptionChange() {
    this.updateSelectAllState();
    this.selectedOptionsText = this.options
      .filter((option) => option.checked)
      .map((option) => option.name)
      .join(', ');
  }

  updateSelectAllState() {
    this.selectAllChecked = this.options.every((option) => option.checked);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const clickedInsideDropdown =
      this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInsideDropdown) {
      this.dropdownVisible = false;
    }
  }
}
