/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-18 17:29:38 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-18 18:35:15
 * summaey: 插槽组件
 */

import React from 'react';
import PropTypes from 'prop-types';

class Slot extends React.Component {

    render() {

        if(!this.props.parentComponents){
            throw new TypeError("Slot components props mast have parentComponents, prop parentComponents is slot parent components. example: <Slot parentComponents={this} /> ");
        };
        
        const { name } = this.props;
        const { children }= this.props.parentComponents.props;

        if(!name){
            return children;
        }
        else{
            return children.map( v => {
                if(v.props.slot=== name) return v;
            }).filter( v => v);
        };
        
    }
}

Slot.defaultProps= {
    //插槽名称
    name: '',
};

Slot.propTypes= {
    name: PropTypes.string
};

export default Slot;