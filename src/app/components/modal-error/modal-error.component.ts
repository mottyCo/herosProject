import { Component, EventEmitter, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.css'
})
export class ModalErrorComponent {
  @Output() closeModal = new EventEmitter()
  onCloseModal(){
    this.closeModal.emit(true)
  }
}
