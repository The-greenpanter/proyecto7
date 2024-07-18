import ReactDom from  'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import Store from '../src/redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
      <App />
    </Provider>
 
)
