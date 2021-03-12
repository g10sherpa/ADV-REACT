import React from "react";

interface IEmployee {
  sno: string;
  name: string;
  age: number;
  designation: string;
}

interface IProps {}

interface IState {
  employees: IEmployee[];
}

class Employees extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      employees: [
        {
          sno: "aaaa",
          name: "Gyamzo",
          age: 25,
          designation: "Sengineeer",
        },
        {
          sno: "aaaab",
          name: "Gyamzoaaaaaa",
          age: 29,
          designation: "Sengineeerssss",
        },
        {
          sno: "aaaavc",
          name: "Gyamzosssss",
          age: 25,
          designation: "Sengineeerffff",
        },
      ],
    };
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                {this.state.employees.map((employee) => {
                  return (
                    <div key={employee.sno} className="card mt-3">
                      <div className="card-body bg-danger">
                        <ul className="list-group">
                          <li className="list-group-item">
                          Employee Id : {employee.sno}
                          </li>
                          <li className="list-group-item">
                          Employee Name : {employee.name}
                          </li>
                          <li className="list-group-item">
                          Employee Age : {employee.age}
                          </li>
                          <li className="list-group-item">
                          Employee Designation : {employee.designation}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Employees;
