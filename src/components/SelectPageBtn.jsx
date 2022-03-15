import '../styles/components/_selectPageBtn.css'

const SelectPageButton = ({pageName, setCurrentPage}) => {
  return (
    <button className='button button--select-page' type='button' onClick={() => setCurrentPage(pageName)}>
      {pageName}
    </button>
  );
}

export default SelectPageButton;
