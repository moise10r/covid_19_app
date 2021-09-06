import { Route, Switch } from 'react-router-dom';
import Home from './component/features/HomePage/home';
import Detail from './component/features/DetailPage/detail';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
