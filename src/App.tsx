import { useParamEditor } from './hooks/useParamEditor';
import NewParamForm from './components/NewParamForm';
import ParamList from './components/ParamList';
import { InitModel, initParams } from './handlers/initialValues';
import './App.css';

/* ============================ Главная часть, компоненты ============================ */

/* <----- Компонент приложения-----> */
function App() {
  const { addParam, deleteParam, params, updateParam } = useParamEditor(
    InitModel,
    initParams
  );

  return (
    <div className='c-app'>
      <div className='l-two-columns'>
        <NewParamForm addParam={addParam} />
        <ParamList
          items={params}
          updateParam={updateParam}
          deleteParam={deleteParam}
        />
      </div>
    </div>
  );
}

export default App;
