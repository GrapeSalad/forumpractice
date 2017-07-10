import { ForumPracticePage } from './app.po';

describe('forum-practice App', function() {
  let page: ForumPracticePage;

  beforeEach(() => {
    page = new ForumPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
