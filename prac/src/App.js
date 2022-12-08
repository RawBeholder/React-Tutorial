
import './App.css';
/* import {Greet} from './components/greet'; */
/* import { Message } from './components/Message';
import { Clickhanlder } from './components/clickhandler'; */
import { ParentComponent } from './components/parentchil';

function App() {
  return (
    <div className="App">
    {/*  <Greet name="sandy" age="21"/>
     <Greet name="clark" age="22">
      <button>Action</button>
     </Greet>
     <Greet name="diana" age="23">This is children props</Greet> */}
    <ParentComponent/>
     
    </div>
    
  );
}

export default App;
