import { AdvViewAngularPage } from './app.po';

describe('adv-view-angular App', () => {
  let page: AdvViewAngularPage;

  beforeEach(() => {
    page = new AdvViewAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
