import { WebToolPage } from './app.po';

describe('web-tool App', () => {
  let page: WebToolPage;

  beforeEach(() => {
    page = new WebToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
