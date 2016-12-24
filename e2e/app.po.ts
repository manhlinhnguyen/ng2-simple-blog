import { browser, element, by } from 'protractor';

export class NodeblogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nb-root h1')).getText();
  }
}
