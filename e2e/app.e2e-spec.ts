import { TrainingProjectPage } from './app.po';

describe('training-project App', () => {
  let page: TrainingProjectPage;

  beforeEach(() => {
    page = new TrainingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
