import { VoteMachinePage } from './app.po';

describe('vote-machine App', function() {
  let page: VoteMachinePage;

  beforeEach(() => {
    page = new VoteMachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
