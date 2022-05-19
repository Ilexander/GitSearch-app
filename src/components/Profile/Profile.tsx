import { ChangeEventHandler, useEffect, useState } from "react";
import { switchWindow } from "../../reducer/currentWindowSlice";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileList } from "./ProfileList";
import "./style.css";

function Profile() {
  const [value, newValue] = useState("");
  const [repos, newRepos] = useState([]);
  const windowStatus = useAppSelector((state) => state.window);
  const { userData, userRepos } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    newValue(e.target.value);
    newRepos(
      userRepos.filter((item: any) => {
        return item.name.indexOf(e.target.value) !== -1;
      })
    );
  };

  useEffect(() => {
    newRepos(userRepos);
  }, [userRepos]);

  return (
    <div
      className="profile"
      style={{
        display: windowStatus.currentWindow === "profile" ? "block" : "none",
      }}
    >
      <div className="profile__wrapper">
        <button
          className="profile__return"
          onClick={() => dispatch(switchWindow("search"))}
        ></button>
        <img
          className="profile__image"
          src={userData.avatar_url}
          alt="Avatar"
        />
        <ProfileInfo />
      </div>
      <h2 className="profile__title">Bio</h2>
      <p className="profile__bio">
        <span>{userData.bio}</span>
      </p>
      <input
        className="profile__input"
        placeholder="Search for User's repositories..."
        type="text"
        value={value}
        onChange={onChange}
      />
      <ProfileList repos={repos} />
    </div>
  );
}

export { Profile };
