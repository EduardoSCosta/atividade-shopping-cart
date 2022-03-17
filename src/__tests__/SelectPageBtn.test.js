import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SelectPageBtn from '../components/SelectPageBtn';

describe('<SelectPageBtn />', () => {
  describe('when the button is clicked', () => {
    it('should call the select page function', () => {
      const pageName = 'Test page';
      const selectPageFunction = jest.fn();

      render(<SelectPageBtn pageName={pageName} setCurrentPage={selectPageFunction} />);

      const selectPageButton = screen.getByRole('button', { name: pageName });

      userEvent.click(selectPageButton);

      expect(selectPageFunction).toHaveBeenCalled();
    });
  });
});
