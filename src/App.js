import { useState } from 'react';
import './App.css';
import Formcontent from './components/Formcontent';
import Header from './components/Header';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [toggleBtn, setToggleBtn] = useState('Light mode is enabled');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, msgtype)=> {
    setAlert ({
      msg: message,
      type: msgtype
    });
  };
  const toggle = ()=> {
    if (mode === 'light') {
      setMode('dark');
      setToggleBtn('Dark mode is enabled');
      document.body.style.backgroundColor = '#000'
      showAlert('Dark mode is enable','success');
    }else {
      setMode('light');
      setToggleBtn('Light mode is enabled');
      document.body.style.backgroundColor = '#fff'
      showAlert('Light mode is enable','success');
    }
  }
  return (
    <>
      <Header brandname="Case Converter" setMode={mode} clickToggle={toggle} toggBtnText={toggleBtn}/>
      <Alert toggleAlert={alert}/>
      <Formcontent setMode={mode}/>
    </>
  );
}

export default App;
