import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import { SERVER_NAME } from "../../constants";

export class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: null,
      studentCompleteList: null,
      maxEntriesToDisplay: 500,
    };
  }

  loadData = () => {
    const thisComp = this;
    const studentId = this.props.studentId;
    console.log("requesting... for id = ", studentId);
    const endpoint = `${SERVER_NAME}/student/all`;
    let lookupOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(endpoint, lookupOptions)
      .then(function (response) {
        return response.json();
      })
      .then(function (responseData) {
        console.log("list", responseData);
        thisComp.setState({
          studentCompleteList: responseData,
          studentList: responseData,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadData();
  }

  displayStudent = (e, data) => {
    this.props.updateStudent(data.id);
  };

  updateSearch = (e) => {
    let searchString = e.target.value.toLowerCase();
    let studentDisplayList = [];
    let studentCompleteList = this.state.studentCompleteList;
    for (let index in studentCompleteList) {
      let student = studentCompleteList[index];
      if (student.name.toLowerCase().includes(searchString)) {
        studentDisplayList.push(student);
      }
    }
    this.setState((prevState) => ({
      ...prevState,
      studentList: studentDisplayList,
    }));
  };

  render() {
    const { studentList, maxEntriesToDisplay } = this.state;
    return (
      <div className="">
        <div className="row">
          <div className="h1 col-9">
            Student List (
            {studentList
              ? Math.min(studentList.length, maxEntriesToDisplay)
              : 0}
            ):
          </div>
          <div className="form-student-id col-3">
            <Form.Control
              type="search"
              id="inputSearch"
              aria-describedby="searchHelpBlock"
              onChange={this.updateSearch}
            />
            <Form.Text id="searchHelpBlock" muted>
              Search by name
            </Form.Text>
          </div>
        </div>

        <hr />
        {studentList == null ? (
          <div>fetching...</div>
        ) : (
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {studentList.slice(0, maxEntriesToDisplay).map((row, index) => (
                <tr
                  className={`entry-${row.id}`}
                  key={row.id}
                  data-id={row.id}
                  onClick={(e) => this.displayStudent(e, row)}
                >
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default StudentList;
