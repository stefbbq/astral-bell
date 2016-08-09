import { AstralBellPage } from './app.po';

describe('astral-bell App', function() {
  let page: AstralBellPage;

  beforeEach(() => {
    page = new AstralBellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
