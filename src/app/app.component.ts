import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchBtn: Boolean = true;
  showEyeBtn: boolean = true;
  showTopButton: boolean = false;
  showMsgButton: boolean = true;

  constructor() { }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showEyeBtn = true;
    } else {
      this.showEyeBtn = false;
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.documentElement.scrollTop = 0;
  }

  getBtnClass() {
    return this.showEyeBtn ? "showTopBtn" : "hideTopBtn";
  }

  toggleSearchBtn() {
    this.searchBtn = !this.searchBtn;
  }
  toggleEyeBtn() {
    this.showEyeBtn = !this.showEyeBtn;
  }
  getClass(): string {
    if (this.searchBtn) {
      return 'hide-bar';
    }
    else {
      return 'search-bar';
    }
  }
  getHeaderClass(): string {
    if (this.searchBtn) {
      return 'fixed-header'
    }
    else {
      return 'stick-header'
    }
  }
  getPdType(): string {
    if (this.showEyeBtn) {
      return "password";
    }
    else {
      return "text";
    }
  }
  showCancelBtn() {
    this.showMsgButton = !this.showMsgButton
  }
  getChatAssistantClass() {
    return !this.showMsgButton ? 'show-conversation' : 'hide-conversation';
  }
}
