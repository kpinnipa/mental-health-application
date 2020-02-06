import React from 'react';
import './SmallResourceBox.css';
import PropsTypes from 'prop-types';
import Picture from './Image/Resource_img.jpeg';

export default class SmallResourceBox extends React.Component {

    static propTypes = {
        name: PropsTypes.string,
        phone: PropsTypes.number,
        email: PropsTypes.string
    }

    constructor(props) {
        super(props)
        this.state = {
 
        }
    }
    render() {
        const Name = ({ title }) => <h1 className="Name">{title.text}</h1>;
        const Phone = ({ title }) => <p className="Phone">{title.text}</p>;
        const Email = ({ title }) => <p className="Email">{title.text}</p>;
        return (
            <div className="Small-Box">
                <header className="Info">            
                    <Name title={{text: this.props.name}}/>
                    <Phone title={{text: this.props.phone}}/>
                    <Email title={{text: this.props.email}}/>
                </header>
            <img src={Picture} className="Image" alt="headShot"></img>
           </div>
         );
    }
}