import { ShowPeoplePage } from './app.po';

describe('show-people App', () => {
  let page: ShowPeoplePage;

  beforeEach(() => {
    page = new ShowPeoplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sp works!');
  });
});
