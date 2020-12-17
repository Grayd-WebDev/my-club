import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
    clicked: false,
  },
  {
    id: 2,
    title: "Posts",
    url: "/posts",
    clicked: false,
  },
  {
    id: 3,
    title: "Profile",
    url: "/profile",
    clicked: false,
  },
];

export const Header = () => {
  const [headerState, setHeaderState] = useState({
    activeItem: {},
    items: MenuItems,
  });

  useEffect(() => {
    if (Object.keys(headerState.activeItem).length === 0) {
      setHeaderState({ ...headerState, activeItem: headerState.items[0] });
    }
  });

  function setActiveItem(id) {
    setHeaderState({ ...headerState, activeItem: headerState.items[id] });
  }

  function toggleActiveItem(id) {
    if (headerState.items[id] === headerState.activeItem) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      {MenuItems.map((item, id) => (
        <Nav.Item>
          <Nav.Link
            as={Link}
            active={toggleActiveItem(id)}
            onClick={() => {
              setActiveItem(id);
            }}
            href={item.url}
            to={item.url}
          >
            {item.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Header;
