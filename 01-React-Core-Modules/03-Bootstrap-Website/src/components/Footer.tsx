import React from 'react';

class Footer extends React.Component{
    render():React.ReactNode{
        return(
            <React.Fragment>
                <footer className="bg-dark text-white text-center p-3">
                    <div className="container">
                        <div className="col">
                            <p className="h4">React Bootstrap &copy; 2021</p>
                            <p>All Rights Reserverd</p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;