import React from "react";
import "./Message.css";
import './Card.css';
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'

class Card extends React.Component {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <div className="card">
            <img src={image1} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image2} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
        <div className="card">
            <img src={image3} className="card-img" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus necessitatibus iusto dolorem, itaque amet? Suscipit inventore deserunt soluta quo libero, ipsa laboriosam commodi assumenda iusto sunt error repellendus. Tempora.20</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
