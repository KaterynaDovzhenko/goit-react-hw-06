import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleSearch = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by Name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
}
