import { Route, Switch } from 'react-router-dom';
import TopBar from './component/common/jsx/topBar';
import Home from './component/features/HomePage/home';

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
