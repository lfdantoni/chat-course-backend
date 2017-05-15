import { PortfolioUniversalPage } from './app.po';

describe('portfolio-universal App', function() {
  let page: PortfolioUniversalPage;

  beforeEach(() => {
    page = new PortfolioUniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
