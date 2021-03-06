import React from "react";

interface IProps {}

interface IEmployee {
  name: string;
  age: number;
  designation: string;
}

interface IState {
  employees : IEmployee[];
}

class Employee extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      employees : [
        {
          name: "hari bahadur",
          age: 25,
          designation: "engineer",
        },
        {
            name: "hari bahadur",
            age: 25,
            designation: "engineer",
          },
          {
            name: "hari bahadur",
            age: 25,
            designation: "engineer",
          },
      ],
    };
  }
  render(): React.ReactNode {
      let {employees} =this.state;
    return (
      <React.Fragment>
        <div className="card m-3">
          <div className="card-body bg-info">
            <ul className="list-group">
              <li className="li list-group-item">Name : {employees[0].name}</li>
              <li className="li list-group-item">Age : {employees[0].age}</li>
              <li className="li list-group-item">Designation : {employees[0].designation}</li>
            </ul>
          </div>
        </div>

        <div className="card m-3">
          <div className="card-body bg-info">
            <ul className="list-group">
              <li className="li list-group-item">Name : {employees[1].name}</li>
              <li className="li list-group-item">Age : {employees[1].age}</li>
              <li className="li list-group-item">Designation : {employees[1].designation}</li>
            </ul>
          </div>
        </div>

        <div className="card m-3">
          <div className="card-body bg-info">
            <ul className="list-group">
              <li className="li list-group-item">Name : {employees[2].name}</li>
              <li className="li list-group-item">Age : {employees[2].age}</li>
              <li className="li list-group-item">Designation : {employees[2].designation}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Employee;
