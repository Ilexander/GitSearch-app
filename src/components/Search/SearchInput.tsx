import React, { useEffect, useState } from "react";
import { clearRepos, fetchUsers } from "../../reducer/fetchSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";

function SearchInput() {
  const [value, newValue] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (value.length > 1) {
      const getResp = setTimeout(() => {
        if (value) {
          dispatch(clearRepos());
        }
        dispatch(fetchUsers(value));
      }, 1000);
      return () => clearTimeout(getResp);
    }
  }, [dispatch, value]);

  return (
    <React.Fragment>
      <input
        className="search__input"
        type="text"
        placeholder="Find anyone..."
        value={value}
        onChange={(e) => newValue(e.target.value)}
      />
      <p className="error">
        {data.total_count === 0
          ? "This user does not exist or the field was empty"
          : ""}
      </p>
    </React.Fragment>
  );
}

export { SearchInput };
