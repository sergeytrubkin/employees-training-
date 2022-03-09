import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ onDelete, data, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.dataset.toggle)} key={id} onDelete={() => onDelete(id)} {...itemProps} />  // <EmployeesListItem name={item.name} salary={item.salary}
    )
  })
  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;
