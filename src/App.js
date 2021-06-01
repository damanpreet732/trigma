import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Form/Form'
import Data from './Data/Data'

function App() {
  return (
    <div className="container p-5"> 
      <div className="row">
        <h1> CURD Operations </h1>
      </div>
      <hr 
      // className="border border-danger" 
      />
      <div className="row">
        <h2>Create & Update Data: </h2> 
        <Form></Form>
      </div>
      <hr 
      // className="border border-danger" 
      />
      <div className="row">
        <h2>Read & Delete Data: </h2>
        <Data></Data>
      </div>
    </div>
  );
}

export default App;
