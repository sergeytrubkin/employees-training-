import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    {name: "All", text: "Все сотрудники"},
    {name: "rise", text: "На повышение"},
    {name: "more1000", text: "З/П больше 1000$"},
  ];

  const buttons = buttonsData.map(({name, text}) => {
    const clazz = name === props.filter ? "btn-light" : "btn-outline-light";

    return (
      <button
        key={name}
        className={`btn ${clazz}`}
        type="button"
        onClick={() => props.onChangeFilter(name)}>
        {text}
      </button>
    )
  })
  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;
