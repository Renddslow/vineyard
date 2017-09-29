import { VineyardPage } from './app.po';

describe('vineyard App', () => {
  let page: VineyardPage;

  beforeEach(() => {
    page = new VineyardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
