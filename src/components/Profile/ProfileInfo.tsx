import { useAppSelector } from "../../reducer/hooks";

function ProfileInfo() {
  const { userData } = useAppSelector((state) => state.user);

  return (
    <div className="profile__content">
      <p className="profile__text">
        Name: <span>{userData.name || "None"}</span>
      </p>
      <p className="profile__text">
        E-mail: <span>{userData.email || "None"}</span>
      </p>
      <p className="profile__text">
        Location: <span>{userData.location || "None"}</span>
      </p>
      <p className="profile__text">
        Join Date: <span>{userData.created_at || "None"}</span>
      </p>
      <p className="profile__text">
        Followers: <span>{userData.followers || "None"}</span>
      </p>
      <p className="profile__text">
        Following: <span>{userData.following || "None"}</span>
      </p>
    </div>
  );
}

export { ProfileInfo };
