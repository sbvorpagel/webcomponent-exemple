import { newSpecPage } from '@stencil/core/testing';
import { CardUser } from '../card-user';

describe('card-user', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CardUser],
      html: `<card-user></card-user>`,
    });
    expect(page.root).toEqualHtml(`
      <card-user>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </card-user>
    `);
  });
});
