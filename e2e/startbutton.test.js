describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the Start a new game button', async () => {
    await expect(element(by.text('Start a new game'))).toBeVisible();
  });

  it('should show the Game and Settings nav buttons at the start', async () => {
    await expect(element(by.text('Game'))).toBeVisible();
    await expect(element(by.text('Game'))).toBeVisible();
  });

  it('should show the keyboard after tapping the Start a new game button', async () => {
    await element(by.text('Start a new game')).tap();
    await expect(element(by.text('Q'))).toBeVisible();
  });
});
