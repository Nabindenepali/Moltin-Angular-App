import { MoltinPage } from './app.po';

describe('moltin App', () => {
  let page: MoltinPage;

  beforeEach(() => {
    page = new MoltinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
