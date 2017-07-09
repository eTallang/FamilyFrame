import { FamilyFramePage } from './app.po';

describe('family-frame App', () => {
  let page: FamilyFramePage;

  beforeEach(() => {
    page = new FamilyFramePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
