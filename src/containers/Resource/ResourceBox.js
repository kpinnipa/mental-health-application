import React from 'react';
import './ResourceBox.css'

export default class ResourceBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const Description = ({ description }) => <p classNmae="Description-Resource">{description.text}</p>;
        return (
            <div className="Big-Box">
                <header className="Resource-Overall">
                   <h1 className="Title-Resource">RESOURCES</h1>
                    <Description description={{text: "Mental health issues are challenging to deal with alone."}}/>
                    <Description description={{text: "Just know that we are here for you, please reach out!"}}/>
               </header>
            </div>
         );
    }
}