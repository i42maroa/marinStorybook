import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ButtonType, SubmitOkButton } from 'src/app/models/submit-ok-button.model';

@Component({
  selector: 'app-submit-ok-button',
  templateUrl: './submit-ok-button.component.html',
  styleUrls: ['./submit-ok-button.component.scss']
})
export class SubmitOkButtonComponent implements OnChanges {

  // @Input() buttonProperties:SubmitOkButton;

  @Input() textLabel:string;
  @Input() primaryColor:string;
  @Input() secondaryColor:string;
  @Input() enabled:boolean;
  @Input() buttonType:ButtonType = 'left';

  @Output() onSubmit = new EventEmitter<Event>();

  constructor(
    private host: ElementRef<HTMLElement>
  ) {
    // this.buttonProperties={
    //   textLabel:"",
    //   primaryColor:"#000",
    //   secondaryColor:"#fff",
    //   enabled:true
    // }
    
    this.textLabel="",
    this.primaryColor="#000",
    this.secondaryColor="#ccc",
    this.enabled=true;
   }

  ngOnChanges(changes: SimpleChanges): void {
    changes['primaryColor'] && this.host.nativeElement.style.setProperty(`--primary-color`, this.primaryColor);
    changes['secondaryColor'] && this.host.nativeElement.style.setProperty(`--secondary-color`, this.secondaryColor);
  }



   submit(){
    this.onSubmit.emit();
   }

   public get classes(): string{
    return `${this.buttonType}_hover_button`;
  }

}
