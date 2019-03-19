import React from 'react';

import Tabbar from '../../libs/tabbar/index'

export default  function tabbar(){
  let options = [
    { name :'军事',value:'tab1'},
    { name :'体育',value:'tab2'},
    { name :'电影电影',value:'tab3'},
    { name :'娱乐娱乐娱乐',value:'tab4'},
    { name :'娱乐娱乐娱乐',value:'tab4'},
    { name :'娱乐娱乐娱乐',value:'tab4'},
  ]
  return (
     
    <div>
      <Tabbar options={ options }></Tabbar>
    </div>
  )
}