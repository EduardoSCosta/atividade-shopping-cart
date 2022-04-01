import { css } from '@styled-system/css';
import { Button } from '../components';
import '../styles/components/_selectPageBtn.css'

const SelectPageButton = ({pageName, setCurrentPage}) => {
  return (
    <Button variant='green' type='button' onClick={() => setCurrentPage(pageName)}
    css={css({
      backgroundColor: 'inherit',
      height: '100%',
      width: '150px',
      borderRadius: '0'
    })}>
      {pageName}
    </Button>
  );
}

export default SelectPageButton;
