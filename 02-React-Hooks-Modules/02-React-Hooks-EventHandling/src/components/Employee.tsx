import React, { useState } from "react";

interface IEmployee {
  name: string;
  age: number;
  designation: string;
}

interface IProps {}
interface IState {
  employees: IEmployee[];
}

let Employee: React.FC<IProps> = () => {
  let [employeeState, setEmployeeState] = useState<IState>({
    employees: [
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
  });

  let { employees } = employeeState;
  return (
    <React.Fragment>
      <div className="card m-3">
        <div className="card-body bg-info">
          <ul className="list-group">
            <li className="li list-group-item">Name : {employees[0].name}</li>
            <li className="li list-group-item">Age : {employees[0].age}</li>
            <li className="li list-group-item">
              Designation : {employees[0].designation}
            </li>
          </ul>
        </div>
      </div>

      <div className="card m-3">
        <div className="card-body bg-info">
          <ul className="list-group">
            <li className="li list-group-item">Name : {employees[1].name}</li>
            <li className="li list-group-item">Age : {employees[1].age}</li>
            <li className="li list-group-item">
              Designation : {employees[1].designation}
            </li>
          </ul>
        </div>
      </div>

      <div className="card m-3">
        <div className="card-body bg-info">
          <ul className="list-group">
            <li className="li list-group-item">Name : {employees[2].name}</li>
            <li className="li list-group-item">Age : {employees[2].age}</li>
            <li className="li list-group-item">
              Designation : {employees[2].designation}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employee;
