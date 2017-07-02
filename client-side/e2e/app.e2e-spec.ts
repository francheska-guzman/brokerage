import { ClientSidePage } from './app.po';

describe('client-side App', () => {
  let page: ClientSidePage;

  beforeEach(() => {
    page = new ClientSidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
