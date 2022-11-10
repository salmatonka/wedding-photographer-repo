import React from 'react';

import useSetTitle from '../../../hooks/useSetTitle';
import ItemCard from './ItemCard';



const Service = () => {
    useSetTitle('Service')
    return (

      <div >
          <ItemCard></ItemCard>

     </div>
       
    );
};

export default Service;