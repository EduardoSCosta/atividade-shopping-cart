import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Input } from '../../components';
import theme from '../../theme';

describe('<Input />', () => {
  it('renders the Input component correctly', () => {
    const InputComponent = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Input variant='outlined' />
        </ThemeProvider>)
      .toJSON();
    expect(InputComponent).toMatchSnapshot();
  })
})
