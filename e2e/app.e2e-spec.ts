import { NodeblogPage } from './app.po';

describe('nodeblog App', function() {
  let page: NodeblogPage;

  beforeEach(() => {
    page = new NodeblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nb works!');
  });
});
