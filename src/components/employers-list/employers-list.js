import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({ onDelete, data, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.dataset.toggle)} key={id} onDelete={() => onDelete(id)} {...itemProps} />  // <EmployersListItem name={item.name} salary={item.salary}
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployersList;
