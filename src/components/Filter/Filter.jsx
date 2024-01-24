import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filter/slice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
