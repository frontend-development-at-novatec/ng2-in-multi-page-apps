import { TestPage } from './app.po';

describe('test App', () => {
  let page: TestPage;

  beforeEach(() => {
    page = new TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
