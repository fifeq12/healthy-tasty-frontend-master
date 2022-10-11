import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private ref: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target : any) {
    if(!this.ref.nativeElement.contains(target))
      this.clickOutside.emit();
  }
}
