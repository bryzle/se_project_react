import avatar from "../../assets/profile image.svg";
import "./SideBar.css";
function SideBar({onSignOut}) {
  function handleSignOut(e) {
    e.preventDefault();
    onSignOut();
  }

  return (
    <div className="sidebar-page">
      <div className="sidebar__username-wrapper">
        <img src={avatar} alt="App Profile Image" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <button className="sidebar__change-prof" type="button">
        Change profile data
      </button>
      <button
        className="sidebar__signout-btn"
        type="button"
        onClick={handleSignOut}
      >
        Log out
      </button>
    </div>
  );
}
export default SideBar;
