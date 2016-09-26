import { InjCalcUIPage } from './app.po';

describe('inj-calc-ui App', function() {
  let page: InjCalcUIPage;

  beforeEach(() => {
    page = new InjCalcUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
