import React from 'react';

import { render, screen, within } from '@testing-library/react';

describe('screen debug', () => {
  test('screen debug default', () => {
    render(
      <div role="group">
        <button className="secondary">Secondary</button>
        <button className="primary">Primary</button>
      </div>
    );
    screen.debug();
    // output:
    //   <body>
    //     <div>
    //       <div
    //         role="group"
    //       >
    //         <button
    //           className="secondary"
    //         >
    //           Secondary
    //         </button>
    //         <button
    //           className="primary"
    //         >
    //           Primary
    //         </button>
    //       </div>
    //     </div>
    //   </body>
  });

  test('screen debug element', () => {
    render(
      <div role="group">
        <button className="secondary">Secondary</button>
        <button className="primary">Primary</button>
      </div>
    );
    screen.debug(document.querySelector('.primary'));
    // output:
    //   <button
    //     className="primary"
    //   >
    //     Primary
    //   </button>
  });
});

describe('query by text', () => {
  test('should return element based on its text', () => {
    const { getByText } = render(<button>Button</button>);
    expect(getByText('Button')).toMatchInlineSnapshot(`
      <button>
        Button
      </button>
    `);
  });
});

describe('query by label text', () => {
  test('should return element based label nesting', () => {
    const { getByLabelText } = render(
      <label>
        Field
        <input />
      </label>
    );
    expect(getByLabelText('Field')).toMatchInlineSnapshot(`<input />`);
  });

  test('should return element based on label htmlFor', () => {
    const { getByLabelText } = render(
      <div>
        <label htmlFor="field">Field</label>
        <input id="field" />
      </div>
    );
    expect(getByLabelText('Field')).toMatchInlineSnapshot(`
      <input
        id="field"
      />
    `);
  });

  test('should return element based on label aria-labelledby', () => {
    const { getByLabelText } = render(
      <div>
        <label id="field">Field</label>
        <input aria-labelledby="field" />
      </div>
    );
    expect(getByLabelText('Field')).toMatchInlineSnapshot(`
      <input
        aria-labelledby="field"
      />
    `);
  });

  test('should return element based on its aria-label', () => {
    const { getByLabelText } = render(<div aria-label="label" />);
    expect(getByLabelText('label')).toMatchInlineSnapshot(`
      <div
        aria-label="label"
      />
    `);
  });
});

describe('query by role', () => {
  test('should return element based on its role', () => {
    const { getByRole } = render(<div role="button" />);
    expect(getByRole('button')).toMatchInlineSnapshot(`
      <div
        role="button"
      />
    `);
  });
});

describe('within', () => {
  test('should nest queries', () => {
    const { getAllByRole } = render(
      <table>
        <tbody>
          <tr role="row">
            <td>Cell</td>
          </tr>
          <tr role="row">
            <td>Cell</td>
          </tr>
          <tr role="row">
            <td>Else</td>
          </tr>
        </tbody>
      </table>
    );
    const [row1, row2, row3] = getAllByRole('row');
    expect(within(row1).getByText('Cell')).toBeTruthy();
    expect(within(row2).getByText('Cell')).toBeTruthy();
    expect(within(row3).queryByText('Cell')).toBeNull();
  });
});
