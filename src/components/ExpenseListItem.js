import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  description,
  amount,
  note,
  createdAt,
  id
}) =>
  (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>{amount}</p>
      <p>{note}</p>
      <p>{createdAt}</p>
    </div>
  );

export default ExpenseListItem;

