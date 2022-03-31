import styled from 'styled-components';

const getTextVariantStyles = (variant, theme) => {
  const variantStyles = {
    h1: theme.fontSizes[6],
    h2: theme.fontSizes[5],
    h3: theme.fontSizes[4],
    h4: theme.fontSizes[3],
    h5: theme.fontSizes[2],
    h6: theme.fontSizes[1],
    p: theme.fontSizes[2]
  };

  return variantStyles[variant] || variantStyles.h1;
}

const Text = styled.h1({
    color: ({ theme }) => theme.colors.black,
    marginBottom: ({ gutterBottom, theme }) => gutterBottom ? theme.space[3] : 0,
    textAlign: ({ align }) => align,
    fontSize: ({ variant, theme }) => getTextVariantStyles(variant, theme)
  }
);

export default Text;
