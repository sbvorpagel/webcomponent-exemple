import { newE2EPage } from '@stencil/core/testing';

describe('card-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<card-user></card-user>');

    const element = await page.find('card-user');
    expect(element).toHaveClass('hydrated');
  });
});
