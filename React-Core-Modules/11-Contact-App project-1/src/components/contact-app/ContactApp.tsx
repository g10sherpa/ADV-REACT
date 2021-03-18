import React from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import { IContact } from "./models/IContact";

interface IProps {}
interface IState {
    selectedContact : IContact;
}

class ContactApp extends React.Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
        selectedContact: {} as IContact
    };
  }

  receiveContact = (contact:IContact):void => {
    this.setState({
        selectedContact : contact
    })
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <section>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3 text-danger">Contact App</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque tempora facilis excepturi dolore soluta provident modi
                  recusandae fugit explicabo laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <ContactList sendContact={this.receiveContact}/>
              </div>
              <div className="col-md-4">
                <ContactCard selectedContact={this.state.selectedContact}/>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactApp;
