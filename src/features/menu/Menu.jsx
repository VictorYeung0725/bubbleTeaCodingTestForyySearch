import { useState } from 'react';
import productsData from '../../Data/data.json';
import MenuItem from './MenuItem';
import { formatLabel } from '../../utils/helpers';

function Menu() {
  const [bubbleTeas, setBubbleTeas] = useState(productsData);

  // Extract the different labels
  const allLabels = bubbleTeas.flatMap((bubbleTea) => bubbleTea.labels);
  const uniqueLabels = [...new Set(allLabels)];

  return (
    <>
      <ul className=" w-auto border-spacing-2 divide-y divide-gray-200 px-10 md:columns-2">
        {uniqueLabels.map((label) => (
          <div key={label}>
            <h3 className="py-3 text-lg font-semibold text-slate-600">
              {formatLabel(label)}
            </h3>
            {bubbleTeas
              .filter((bubbleTea) => bubbleTea.labels.includes(label))
              .map((filteredBubbleTea) => {
                return (
                  <MenuItem
                    key={filteredBubbleTea.id}
                    bubbleTea={filteredBubbleTea}
                  />
                );
              })}
          </div>
        ))}
      </ul>
    </>
  );
}

export default Menu;
