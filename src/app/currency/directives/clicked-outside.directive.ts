import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core'

@Directive({
  selector: '[appClickedOutside]',
})
export class ClickedOutsideDirective {
  constructor(private element: ElementRef) {}

  @Output() public clickedOutside = new EventEmitter()

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.element.nativeElement.contains(target)

    if (!clickedInside) {
      this.clickedOutside.emit(target)
    }
  }
}
