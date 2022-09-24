import React, { Component } from "react";
import StudentDetail from "./StudentDetail";
import StudentList from "./StudentList";

export class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: null,
    };
  }

  updateStudent(studentId) {
    this.setState({
      studentId: studentId,
    });
  }

  render() {
    var updateStudent = this.updateStudent;
    let { studentId } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <StudentList updateStudent={updateStudent.bind(this)} />
          </div>
          <div className="col-4">
            <StudentDetail studentId={studentId} />
          </div>
        </div>
      </div>
    );
  }
}

StudentView.defaultProps = {
  studentId: null,
};

export default StudentView;
