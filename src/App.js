import { SnackbarProvider } from 'notistack';
import Form from './components/Form';
import AllCenter from './layout/AllCenter';
import { Provider }  from './layout/Provider';

const App = () => {
  return (
    <Provider>
      <SnackbarProvider>
        <AllCenter>
          <Form/>
        </AllCenter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
