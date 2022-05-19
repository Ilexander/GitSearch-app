/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { switchWindow } from "../../reducer/currentWindowSlice";
import { fetchRepos } from "../../reducer/fetchSlice";
import { fetchUser, getCurrentRepos } from "../../reducer/fetchUserSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import "./style.css";

interface IItem {
  login: string;
  avatar_url: string;
  repos_url: string;
}

function List() {
  const { data, repos, status } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    data.items?.map((item: IItem) => {
      dispatch(fetchRepos(item.repos_url));
    });
  }, [data]);

  function getCurrentUser(name: string, index: string | number) {
    dispatch(fetchUser(name))
    dispatch(getCurrentRepos(index))
    dispatch(switchWindow('profile'))
  }

  return (
    <ul
      className="search__list"
      style={{ display: status === "fulfilled" ? "block" : "none" }}
    >
      {data.items?.map((item: IItem, index: number) => {
        return (
          <li
            className="search__item"
            key={index}
            onClick={() => getCurrentUser(item.login, repos[index])}
          >
            <img className="search__img" src={item.avatar_url} alt="" />
            <p className="search__name">{item.login}</p>
            <p className="search__repo">
              Repo: <span>{repos[index]?.length}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export { List };
