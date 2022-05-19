interface IProfileList {
  repos: string[];
}

function ProfileList(props: IProfileList) {
  return (
    <ul className="profile__list">
      {props.repos.map((item: any, index: number) => (
        <li className="profile__item" key={index}>
          <a href={item.html_url}>
            <p className="profile-item__name">
              Repositories name: <span>{item.name}</span>
            </p>
            <div className="profile-item__wrapper">
              <p className="profile-item__text">
                Forks&nbsp;
                <span>{item.forks}</span>
              </p>
              <p className="profile-item__text">
                Stars&nbsp;
                <span>{item.stargazers_count}</span>
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { ProfileList };
