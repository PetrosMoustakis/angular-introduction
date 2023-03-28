import { Component } from '@angular/core';

@Component({
  selector: 'app-my-hello-component',
  templateUrl: './my-hello-component.component.html',
  styleUrls: ['./my-hello-component.component.css'],
})
export class MyHelloComponentComponent {
  imageUrl = 'https://picsum.photos/200';
  imageALT = 'An image from picsum photos';
  imageTooltip = this.imageALT;

  buttonDisabled = true;
  buttonPrompt = 'Click me';

  times = 0;
  userInput = ' ';

  onButtonClick() {
    this.times += 1;
    console.log(this.times);
  }

  onResetClick() {
    this.times = 0;
    this.userInput = ' ';
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
    
  }

  onInputClick() {
    console.log('Input Clicked');
  }
}
