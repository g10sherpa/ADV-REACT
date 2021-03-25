import React from "react";
import { IEmployee } from "../models/IEmployee";
import axios from "axios";
import { Link } from "react-router-dom";

interface IProps {}
interface IState {
  employees: IEmployee[];
}

class EmployeeList extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      employees: [] as IEmployee[],
    };
  }

  componentDidMount(): void {
    let dataURL: string = `https://jsonplaceholder.typicode.com/users`;
    axios
      .get(dataURL)
      .then((response) => {
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(): React.ReactNode {
    let { employees } = this.state;
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3">Employee List</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, inventore.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-3">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <section>
          <table className="table table-hover text-center table-striped ml-3">
            <thead className="bg-dark text-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 &&
                employees.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.email}</td>
                      <td>{employee.address.city}</td>
                      <td>{employee.website}</td>
                      <td>{employee.company.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </React.Fragment>
    );
    
  }
}

export default EmployeeList;
