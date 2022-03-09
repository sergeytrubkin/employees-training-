import './app-info.css';

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {props.employersCount}</h2>
      <h2>Премию получит: {props.increaseCount}</h2>
    </div>
  )
}

export default AppInfo;
