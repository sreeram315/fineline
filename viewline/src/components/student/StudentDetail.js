import React from "react";
import { SERVER_NAME } from "../../constants";

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: null,
    };
  }

  loadData = () => {
    const thisComp = this;
    const studentId = this.props.studentId;
    const endpoint = `${SERVER_NAME}/student/get?id=${studentId}`;
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
        console.log("detail", responseData);
        thisComp.setState({
          studentData: responseData,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) this.loadData();
  }

  render() {
    const { studentData } = this.state;
    return (
      <div className="stuck">
        <div className="h1">Student Detail:</div>
        <hr />
        {studentData == null ? (
          <div> No data to show.. </div>
        ) : (
          <div>
            <div className="student-detail">
              <b>ID:</b> {studentData.id} <br />
              <b>name:</b> {studentData.name} <br />
              <b>contact:</b> {studentData.contact} <br />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default StudentDetail;
