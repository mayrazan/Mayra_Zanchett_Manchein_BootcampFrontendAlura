import { renderHook, act } from '@testing-library/react-hooks';
import useWindowSize from '.';

describe('useWindowSize()', () => {
  const { result } = renderHook(() => useWindowSize());

  describe('when the window size changes', () => {
    test('verify size', () => {
      act(() => {
        global.innerWidth = 600;
        window.dispatchEvent(new Event('resize'));
      });

      expect(result.current.isDesktop).toEqual(false);
      act(() => {
        global.innerWidth = 800;
        window.dispatchEvent(new Event('resize'));
      });

      expect(result.current.isDesktop).toEqual(true);
    });
  });
});
