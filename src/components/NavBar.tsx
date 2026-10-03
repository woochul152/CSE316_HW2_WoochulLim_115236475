import React from "react";

interface Props {
  page: number;
  handleSelect: (index: number) => void;
}

const NavBar = ({ page, handleSelect }: Props) => {
  return (
    <div>
      <nav>
        <ul id="navbar" className="course-navbar flex" data-visible="false">
          <li>
            <a
              className={page === 0 ? "nav-underbar" : ""}
              // prevent rerendeing page by e.preventDefault()
              onClick={(e) => {
                e.preventDefault();
                handleSelect(0);
              }}
            >
              <span className="nav-numbers" aria-hidden="true">
                00
              </span>
              Home
            </a>
          </li>

          <li>
            <a
              href=""
              className={page === 1 ? "nav-underbar" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(1);
              }}
            >
              <span className="nav-numbers" aria-hidden="true">
                01
              </span>
              Instructions
            </a>
          </li>

          <li>
            <a
              href=""
              className={page === 2 ? "nav-underbar" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(2);
              }}
            >
              <span className="nav-numbers" aria-hidden="true">
                02
              </span>
              Enter Previous Courses
            </a>
          </li>

          <li>
            <a
              href=""
              className={page === 3 ? "nav-underbar" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(3);
              }}
            >
              <span className="nav-numbers" aria-hidden="true">
                03
              </span>
              Select Courses
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
