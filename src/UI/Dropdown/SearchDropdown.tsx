import React, { FC, useState } from 'react';

import { Dropdown } from '@/UI';

import styles from './Dropdown.module.scss';
// import { categories } from '@/mock/filters';

export const SearchDropdown: FC<{ state: boolean }> = ({ state }): JSX.Element => {
  const [val, setVal] = useState<string>('');
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(() => e.target.value);
  };

  // const dynamicSearch = () => {
  //   const array = categories.find((item) => item.plankID !== undefined)?.category;
  //   if (!val && array) return [...array].splice(0, 10);
  //   if (array) {
  //     return array.filter((s) => {
  //       const regex = new RegExp(val + '[A-Za-z0-9]*', 'gi'); //
  //       return s.title.match(regex)?.splice(0, 15);
  //     });
  //   }
  // };
  return (
    <Dropdown state={state}>
      <div className={`${styles.dropdown} ${styles.find}`}>
        <input type={'text'} onChange={(e) => handler(e)} value={val} />
        <div className={styles.list_container}>
          <ul className={styles.one_lane}></ul>
        </div>
      </div>
    </Dropdown>
  );
};

// {dynamicSearch().map((person) => (
//   <li
//     className={
//       chosen
//         ?.find((item) => item.plankID === plank?.id)
//         ?.category.find((item) => item.id == person.id)
//         ? styles.checked
//         : ''
//     }
//     key={person.id}
//   >
//     <label>
//       <input type="checkbox" value={person.title} onChange={() => change(person)} />
//       <div className={styles.input_text}>{person.title}</div>
//       <div className={styles.checkbox}>
//         <div className={styles.checkbox_selected}>
//           <BsCheckLg />
//         </div>
//       </div>
//     </label>
//   </li>
// ))}
