import React from "react";
import { IContact } from "./models/IContact";
import axios from "axios";

interface IProps {
  sendContact: (contact: IContact) => void;
}

interface IState {
  contacts: IContact[];
}

class ContactList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      contacts: [] as IContact[]
    };
  }

  componentDidMount(): void {
    let dataURL: string = `https://jsonplaceholder.typicode.com/users`;
    axios
      .get(dataURL)
      .then((response) => {
        this.setState({
          contacts: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  selectContact = (contact: IContact) => {
    this.props.sendContact(contact);
  };

  render(): React.ReactNode {
    let { contacts } = this.state;
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3 text-primary">Contact List</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <table className="table table-hover text-center table-striped">
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
                    {contacts.length > 0 &&
                      contacts.map((contact) => {
                        return (
                          <tr
                            key={contact.id}
                            onClick={this.selectContact.bind(this, contact)}
                          >
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.address.city}</td>
                            <td>{contact.website}</td>
                            <td>{contact.company.name}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactList;
