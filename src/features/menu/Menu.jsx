import { useState } from 'react';
import productsData from '../../Data/data.json';
import MenuItem from './MenuItem';

function Menu() {
  const [bubbleTeas, setBubbleTeas] = useState(productsData);

  return (
    <>
      <ul className=" w-auto border-spacing-2 divide-y divide-gray-200 px-10 md:columns-2">
        {bubbleTeas.map((bubbleTea) => {
          return <MenuItem key={bubbleTea.id} bubbleTea={bubbleTea} />;
        })}
      </ul>
    </>
  );
}

export default Menu;
