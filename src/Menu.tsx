import React, { useState } from "react";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <ul className="menubar">
        <li
          className={`menu-item ${selectedItem === 1 ? "selected" : ""}`}
          onClick={() => handleItemClick(1)}
        >
          Section 1
        </li>
        <li
          className={`menu-item ${selectedItem === 2 ? "selected" : ""}`}
          onClick={() => handleItemClick(2)}
        >
          Section 2
        </li>
      </ul>

      <div className="submenu">
        <ul
          className={`sub-menubar ${selectedItem === 1 ? "visible" : "hidden"}`}
        >
          <li className="menu-item">Section 1.1</li>
          <li className="menu-item">Section 1.2</li>
        </ul>

        <ul
          className={`sub-menubar ${selectedItem === 2 ? "visible" : "hidden"}`}
        >
          <li className="menu-item">Section 2.1</li>
          <li className="menu-item">Section 2.2</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
