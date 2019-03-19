import React from 'react';
import PropTypes from 'prop-types';

import './index.css'

class Avatar extends React.Component {


    getClassName= ()=> {
        return `dmui-avatar ${this.props.size} ${this.props.type}`
    }

    getStyle= ()=> {
        if(this.props.width && this.props.height){
            return {
                width: `${this.props.width}rem`, 
                height: `${this.props.type}rem;`
            }
        }
        return {};
    }

    render() {

        const {src}= this.props;

        return (
            <img src={src} className={this.getClassName()} style={this.getStyle()} ></img>
        );

    }

}

Avatar.defaultProps= {
    //size: large normal small smaller
    size: "normal",
    //type: round square
    type: "",
    width: 0,
    height: 0,
    src: ''
};

Avatar.propTypes= {
    size: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
};

export default Avatar;