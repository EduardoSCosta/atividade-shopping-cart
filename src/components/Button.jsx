import styled from 'styled-components';

const getButtonVariantStyles = (variant, theme) => {
  const variantStyles = {
    blue: {
      backgroundColor: theme.colors.blue300,
      color: theme.colors.white
    },
    red: {
      backgroundColor: theme.colors.red300,
      color: theme.colors.black
    },
    green: {
      backgroundColor: theme.colors.green300,
      color: theme.colors.black
    },
    white: {
      backgroundColor: theme.colors.white,
      color: theme.colors.blue300
    }
  }

  return variantStyles[variant] || variantStyles.blue
}

export const Button = styled.button({
  padding: ({ theme }) => theme.space[3],
  textTransform: 'uppercase',
  border: 'none',
  borderRadius: ({ theme }) => theme.radii[1],
  backgroundColor: ({ variant, theme }) => getButtonVariantStyles(variant, theme).backgroundColor,
  color:({ variant, theme }) => getButtonVariantStyles(variant, theme).color,
  transition: 'filter 0.2s',

  '&:hover:enabled': {
    filter: 'brightness(0.8)'
  },

  '&:disabled': {
    backgroundColor: ({ theme }) => theme.colors.gray200,
  },

});
