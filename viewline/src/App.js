import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentView from "./components/student/StudentView";

function App() {
  return (
    <div className="container p-5">
      <StudentView studentId={null} />
    </div>
  );
}

export default App;
