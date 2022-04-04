import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../components';
import theme from '../../theme';

describe('<Text />', () => {
  it('renders the Text component correctly', () => {
    const TextComponent = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Text variant='standard'>Text</Text>
        </ThemeProvider>)
      .toJSON();
    expect(TextComponent).toMatchSnapshot();
  })
})
