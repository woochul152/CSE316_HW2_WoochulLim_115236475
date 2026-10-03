import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import SelectCourses from "./components/SelectCourses";
import EnterPreviousCourses from "./components/EnterPreviousCourses";

const App = () => {
  // set the current page

  // 0: home
  // 1: Instructions
  // 2: EnterPreviousCourses
  // 3: SelectCourses
  const [currentPage, selectPage] = useState(0);
  return (
    <div>
      <h1 className="header p-3">CourseMan</h1>
      <NavBar page={currentPage} handleSelect={selectPage} />

      {/* Show only selected page */}
      {currentPage === 0 && <Home />}
      {currentPage === 1 && <Instructions />}
      {currentPage === 2 && <EnterPreviousCourses />}
      {currentPage === 3 && <SelectCourses />}
    </div>
  );
};

export default App;
