import React from "react";
import { IContact } from "./models/IContact";

interface IProps {
  selectedContact: IContact;
}

interface IState {}

class ContactCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    let { selectedContact } = this.props;
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
        {/* Object.keys(selectedContact).length > 0 && */}
        <div className="card sticky-top">
            <div className="card-header bg-danger text-white p-5">

            </div>
            <div className="card-body text-center">
                <ul className="list-group">
                    <li className="list-group-item">
                        Name:{selectedContact.name}
                    </li>
                    <li className="list-group-item">
                        Email:{selectedContact.email}
                    </li>
                    <li className="list-group-item">
                        Address:{selectedContact.address.city}
                    </li>
                    <li className="list-group-item">
                        Website:{selectedContact.website}
                    </li>
                </ul>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactCard;
