import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { v4 as uuidv4 } from 'uuid';

import AuthChecker from './auth/authChecker'


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={uuidv4()}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </Provider>
    </HashRouter>
  );
}

export default App;
