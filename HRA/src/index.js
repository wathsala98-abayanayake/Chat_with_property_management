import {render} from 'react-dom';
import routes from './routes'
import 'font-awesome/css/font-awesome.min.css'
import './App.scss';
require('bootstrap/dist/css/bootstrap.min.css');

render(routes, document.getElementById('root'));
