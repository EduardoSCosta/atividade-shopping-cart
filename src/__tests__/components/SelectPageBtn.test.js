import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import SelectPageBtn from '../../components/SelectPageBtn';

describe('<SelectPageBtn />', () => {
  describe('when the button is clicked', () => {
    it('should call the select page function', () => {
      const pageName = 'Test page';
      const selectPageFunction = jest.fn();

      render(
        <ThemeProvider theme={theme}>
          <SelectPageBtn pageName={pageName} setCurrentPage={selectPageFunction} />
        </ThemeProvider>);

      const selectPageButton = screen.getByRole('button', { name: pageName });

      userEvent.click(selectPageButton);

      expect(selectPageFunction).toHaveBeenCalled();
    });
  });
});
