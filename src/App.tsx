
import { Outlet } from 'react-router-dom';
import { LayoutComponent } from './components/Layout';

function App() {

  return (
    <>
      <LayoutComponent />
      <p>This is the app to test the CI/CD.</p>
      <Outlet/>
    </>
  )
}

export default App
