import React from 'react';
import './ResourceBlock.css';
import PropsTypes from 'prop-types';
import SmallResourceBox from './SmallResourceBox';

export default class ResourceBlock extends React.Component {

    static propTypes = {
        name1: PropsTypes.string,
        phone1: PropsTypes.number,
        email1: PropsTypes.string,
        name2: PropsTypes.string,
        phone2: PropsTypes.number,
        email2: PropsTypes.string,
        name3: PropsTypes.string,
        phone3: PropsTypes.number,
        email3: PropsTypes.string,
    }

    constructor(props) {
        super(props)
        this.state = {
 
        }
    }
    render() {
        const Title = ({ title }) => <h1>{title.text}</h1>;
        return(
            <div className="SmallBoxOutline">
                {<SmallResourceBox name= {this.props.name1} phone={this.props.phone1} email={this.props.email1}/>}
                {<SmallResourceBox name= {this.props.name2} phone={this.props.phone2} email={this.props.email2}/>}
                {<SmallResourceBox name= {this.props.name3} phone={this.props.phone3} email={this.props.email3}/>}
            </div>
        );       
    }
}