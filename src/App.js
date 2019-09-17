import React from 'react';

import Template from './components/layout/template';
import Home from './pages/home';

import { Provider } from 'react-redux';
import store from './redux/store';

import useFetch from './hooks/useFetch';
import { resolvePath } from './helpers/index';

const App = () => {
  const { data, loading } = useFetch(resolvePath('data.json'));

  return (
    <div className="App">
      <Provider store={store}>
        <Template>{!loading && <Home data={data} />}</Template>
      </Provider>
    </div>
  );
};

export default App;
