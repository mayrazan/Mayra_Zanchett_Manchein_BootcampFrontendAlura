import { css } from 'styled-components';
import breakpointsMedia from './breakpointsMedia';

describe('breakpointsMedia()', () => {
  describe('when receives a breakpoint', () => {
    test('and its an object', () => {
      const media = {
        md: css`
          text-align: center;
        `,
      };
      const result = breakpointsMedia(media);

      expect(result).toMatchSnapshot();
    });
  });
});
