import { Route, Switch } from 'react-router-dom';
import Home from './component/features/HomePage/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
