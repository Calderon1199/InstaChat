import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useModal } from "../../context/Modal";
import LoginFormModal from "../LoginFormModal";
import ProfileButton from "./ProfileButton";

import "./Navigation.css";

function Navigation() {
  const user = useSelector(state => state.session.user);

  const { setModalContent } = useModal();
  const navigate = useNavigate();

  const urlPath = "/posts/new";

  const handleNavLinkClick = () => {
    if (!user) {
      setModalContent(<LoginFormModal />);
    } else {
      navigate(urlPath);
    }
  };

  return (
    <div className="Nav-Container">
      <ul className="Nav-Options">
        <li>
          <NavLink className="NavLink" to="/">
            Home
          </NavLink>
        </li>
        <div className="Right-Side-Navigation">
          <li>
            <NavLink className="NavLink" to={urlPath} onClick={handleNavLinkClick}>
              Create a post
            </NavLink>
          </li>
          <li className="Profile-Button-Container">
            <ProfileButton />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
