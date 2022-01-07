import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickActionsLWC extends LightningElement {
  _title = 'Sample Title';
  message = 'Sample Message';
  variant = 'error';
  variantOptions = [
      { label: 'error', value: 'error' },
      { label: 'warning', value: 'warning' },
      { label: 'success', value: 'success' },
      { label: 'info', value: 'info' },
  ];

  @api invoke() {
    console.log("Hi, I'm an action. new2");
    this.showNotification();
  }


  titleChange(event) {
      this._title = event.target.value;
  }

  messageChange(event) {
      this.message = event.target.value;
  }

  variantChange(event) {
      this.variant = event.target.value;
  }

  showNotification() {
      const evt = new ShowToastEvent({
          title: this._title,
          message: this.message,
          variant: this.variant,
      });
      this.dispatchEvent(evt);
  }
}


