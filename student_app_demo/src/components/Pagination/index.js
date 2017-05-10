import React from "react";

const PagiItem = ({itemOnClick, value, isActive}) => {
  const link = isActive ?
    <span>{value}</span> :
    <a href="#" onClick={(e) => {
      e.preventDefault();
      return itemOnClick(value);
    }}>{value}</a>;

  return (
    <li className={isActive ?  'active' : ''}>
      {link}
    </li>
  );
};

const PagiList = ({handleClick, paging}) => {
  let rows = [];
  let number = 0;
  let i = 0;
  do {
    number += 1;
    rows.push(<PagiItem key={number} itemOnClick={(page) => handleClick(page)} value={number} isActive={paging.page === number}/>);
    i += paging.limit;
  } while (i < paging.total);

  return (
    <nav>
      <ul className="pagination">
        {paging.total > 0 && rows}
      </ul>
    </nav>
  );
};

export default PagiList;