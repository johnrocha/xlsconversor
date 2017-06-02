import { TaximanagerPage } from './app.po';

describe('taximanager App', () => {
  let page: TaximanagerPage;

  beforeEach(() => {
    page = new TaximanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
