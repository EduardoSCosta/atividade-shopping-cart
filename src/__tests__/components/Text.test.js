import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Text } from '../../components';
import themes from '../../theme';

const theme = themes.light;

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
