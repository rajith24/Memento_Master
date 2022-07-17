import { BrowserRouter } from 'react-router-dom'
import Route from './route';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';


// ReactDOM.render((
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   ), document.getElementById('root'))

render(
  <Route />, document.getElementById('root'));

  export default Route;