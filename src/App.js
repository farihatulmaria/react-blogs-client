import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from './Redux/store';
import routes from './Router/Router';
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}/>
      </Provider>
    </>
  );
}

export default App;
