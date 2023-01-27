import { useState } from 'react';
import './App.css';

function App() {

  const [stateItem, setStateItem] = useState({
    activeObjects: null,
    objects: [{id: 1, name: "Principal"}, {id: 2, name: "Planes"}, {id:3, name: "Contacto"}, {id: 4, name: "Ingreso"}]
  })

  const active = (index) =>  {
    setStateItem({...stateItem, activeObjects: stateItem.objects[index]})
  }

  const activeStyle = (index) => {
    if (stateItem.objects[index] === stateItem.activeObjects){
      return "title active";
    } else {
      return "title inactive";
    }
  }

  return (
    <div className="App">
      {stateItem.objects.map((element, index) => (
        <div key={index} className={activeStyle(index)} onClick={() => active(index)}>
          <p>{element.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
