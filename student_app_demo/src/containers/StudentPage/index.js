import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as StudentAction from "./actions";
import {StudentTable} from "../../components/StudentTable";
import Pagination from "../../components/Pagination";

class StudentPage extends Component {

  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const {loading, response, paging} = this.props.studentReducer.list;
    const studentTable = (response && loading === false) ? <StudentTable deleteRecord={(id) => this.props.actions.deleteUser(id)} records={response}/> : <p>Loading...</p>;
    const tablePagination = <Pagination handleClick={(page) => this.props.actions.fetchUsers(page)} paging={paging} />;

    return (
      <div>
        <h3>List Students</h3>
        {studentTable}
        <div className="text-center">
          {tablePagination}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentReducer: state.studentReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(StudentAction, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);