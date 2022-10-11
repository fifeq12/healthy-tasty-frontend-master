import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IDictionary } from '../../shared/interfaces/IDictionary';

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrls: ['./dropdown-selector.component.scss']
})
export class DropdownSelectorComponent implements OnInit {

  constructor() { }

  @Input() disabled: boolean = false;
  @Input() selectedItem!: IDictionary | null;
  @Input() placeholder!:string;
  @Input() items:IDictionary[] = [];
  @Output() selectedItemChange: EventEmitter<IDictionary | null> = new EventEmitter<IDictionary | null>();
  @Output() cleared = new EventEmitter<void>();

  isExpanded:boolean = false;

  ngOnInit(): void {
  }

  expand() {
    if(!this.disabled)
      this.isExpanded = !this.isExpanded;
  }

  selectItem(item: IDictionary){
    this.selectedItem = item;
    this.selectedItemChange.emit(this.selectedItem);
  }

  clear() {
    this.selectedItem = null;
    this.selectedItemChange.emit(null);
    this.cleared.emit();
    this.isExpanded = false;
  }

}
