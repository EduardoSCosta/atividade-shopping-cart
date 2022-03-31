import styled from 'styled-components';

const getInputWrapperVariantStyles = (variant, theme) => {
  const variantStyles = {
    filled: {
      border: 'none',
      backgroundColor: theme.colors.gray200,
      transition: 'filter 0.2s',
      '&:hover': {
        filter: 'brightness(0.95)'
      },
    },
    outlined: {
      border: `1px solid ${theme.colors.gray200}`,
      '&:hover': {
        borderColor: theme.colors.black
      },
    },
    standard: {
      backgroundColor: 'white',
      borderBottom: `1px solid ${theme.colors.black}`,
      '&:hover': {
        borderBottom: '2px solid'
      },
    },
  };
  return variantStyles[variant] || variantStyles.standard;
}

const InputWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: ({ fullWidth }) => fullWidth ? '100%' : 'auto',
  height: ({ theme }) => theme.sizes[0],
  border: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme).border,
  borderBottom: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme).borderBottom,
  backgroundColor: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme).backgroundColor,
  transition: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme).transition,

  '&:hover': {
    filter: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme)['&:hover'].filter,
    borderColor: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme)['&:hover'].borderColor,
    borderBottom: ({ variant, theme }) => getInputWrapperVariantStyles(variant, theme)['&:hover'].borderBottom
  }
}
);

const StyledLabel = styled.label({
  color: ({ theme }) => theme.colors.black,
  paddingLeft: ({ theme }) => theme.space[3]
});

const StyledInput = styled.input({
  border: 'none',
  height: '100%',
  backgroundColor: 'transparent'
});

const Input = ({
  required,
  id,
  name,
  label,
  fullWidth = false,
  autoComplete,
  variant,
  value,
  onChange }) => {

  return (
    <InputWrapper variant={variant} fullWidth={fullWidth}>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        required={required}
        id={id}
        name={name}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
