import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../components';
import theme from '../../theme';

describe('<Button />', () => {
  it('renders the Button component correctly', () => {
    const buttonComponent = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Button variant='green'>TestButton</Button>
        </ThemeProvider>)
      .toJSON();
    expect(buttonComponent).toMatchSnapshot();
  })
})
