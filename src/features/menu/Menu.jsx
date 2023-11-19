import { useState } from 'react';
import productsData from '../../Data/data.json';
import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import { getFilteredBubbleTeas } from '../cart/cartSlice';

function Menu() {
  const [bubbleTeas, setBubbleTeas] = useState(productsData);

  // const bubbleTeaTypeList = useSelector(getFilteredBubbleTeas);

  // Extract the different labels
  const allLabels = bubbleTeas.flatMap((bubbleTea) => bubbleTea.labels);
  const uniqueLabels = [...new Set(allLabels)];

  console.log(uniqueLabels);
  return (
    <>
      <ul className=" w-auto border-spacing-2 divide-y divide-gray-200 px-10 md:columns-2">
        {uniqueLabels.map((label) => (
          <div key={label}>
            <h5>{label}</h5>
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

        {/* {bubbleTeas.map((bubbleTea) => {})} */}
      </ul>
    </>
  );
}

export default Menu;

// return (
//   <div>
//     {uniqueLabels.map((label) => (
//       <div key={label}>
//         <h2>{label}</h2> {/* Render the label text */}
//         {bubbleTeas
//           .filter((bubbleTea) => bubbleTea.labels.includes(label)) // Filter based on the label
//           .map((bubbleTea) => (
//             <div key={bubbleTea.id}>
//               {/* Render the bubble tea information */}
//               <h3>{bubbleTea.name}</h3>
//               <p>{bubbleTea.description}</p>
//               {/* Add to cart button and other actions */}
//             </div>
//           ))}
//       </div>
//     ))}
//   </div>
// );
