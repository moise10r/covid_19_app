import { Route, Switch } from 'react-router-dom';
import TopBar from './component/common/jsx/TopBar/topBar';
import Home from './component/features/HomePage/home';
import './app.scss';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
