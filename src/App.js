import { Route, Switch } from 'react-router-dom';
import Home from './component/features/HomePage/home';
import Detail from './component/features/DetailPage/detail';
import './app.scss';
import FilterByContinent from './component/features/Filter/filterByContinent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/:country" component={Detail} />
        <Route path="/" component={Home} />
        <Route path="/:continent" exact component={FilterByContinent} />
      </Switch>
    </div>
  );
}

export default App;
