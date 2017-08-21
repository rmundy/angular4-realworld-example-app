import { Angular4RealworldExampleAppPage } from './app.po';

describe('angular4-realworld-example-app App', () => {
  let page: Angular4RealworldExampleAppPage;

  beforeEach(() => {
    page = new Angular4RealworldExampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
