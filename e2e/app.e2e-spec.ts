import { WDD2CA2Page } from './app.po';

describe('wdd2-ca2 App', function() {
  let page: WDD2CA2Page;

  beforeEach(() => {
    page = new WDD2CA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
