import React from 'react';

class Intro extends React.Component{
    render():React.ReactNode{
        return(
           <React.Fragment>
               <section className="bg-danger text-white p-3">
                   <div className="container">
                       <div className="row">
                           <div className="col text-center">
                                <h5 className="display-4">Bootstrap With React</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime!</p>
                           </div>
                       </div>
                   </div>
               </section>
           </React.Fragment>
        )
    }
}

export default Intro;