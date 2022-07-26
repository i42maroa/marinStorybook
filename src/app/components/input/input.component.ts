import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{

  constructor(
    private host: ElementRef<HTMLElement>
  ) { }

  @Input() label:string = "Label";
  @Input() inputValue:string = "";
  @Input() inputType: 'text' | 'number' | 'password' | 'email' = 'text';
  @Input() maxLength:number = 20;
  @Input() enabled:boolean = true;
  @Input() primaryColor:string = "#fff";
  @Input() secondaryColor:string = "#000";

  ngOnChanges(changes: SimpleChanges): void {
    changes['primaryColor'] && this.host.nativeElement.style.setProperty(`--primary-color`, this.primaryColor);
    changes['secondaryColor'] && this.host.nativeElement.style.setProperty(`--secondary-color`, this.secondaryColor);
  }
 
}
