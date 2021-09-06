import { Route, Switch } from 'react-router-dom';
import TopBar from './component/common/jsx/TopBar/topBar';
import Home from './component/features/HomePage/home';
import './app.scss';
import Detail from './component/features/DetailPage/detail';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
