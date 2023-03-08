import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'Redux/filter/filter-slice';

import { getFilter } from 'Redux/filter/filter-selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <>
      <h2 className={css.main__title}>Contacts</h2>
      <div className={css.filter__item}>
        <h3 className={css.filter__title}>Find contacts by name</h3>
        <input
          className={css.filter__input}
          type="text"
          value={filter}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          onChange={handleFilterChange}
        />
      </div>
    </>
  );
};
