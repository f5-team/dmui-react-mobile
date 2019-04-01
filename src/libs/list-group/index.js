/*
 * @Author: denghuaicheng
 * @Date: 2019-03-18 21:06:21
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-04-01 13:40:06
 * summary: 数据展示： list-group
 */

import React from 'react';
import Slot from '../slot/index';

import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
class ListGroup extends React.Component {
  render() {
    return (
      <div className="dmui-group-list border-mobile--bm border-mobile--tp">
        <Slot parentComponents={this} />
      </div>
    );
  }
}

export default ListGroup;
