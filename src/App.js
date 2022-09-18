import { Fragment } from 'react';

import Header from './components/UI/Header';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';
import Map from './components/map/Map';

function App() {
  return (
    <Fragment>
      <Header>
        <ResultsDisplay />
      </Header>
      <Map />
    </Fragment>
  );
}

export default App;
