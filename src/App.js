import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='#00183d';
      showAlert("Dark Mode Enabled","success");
      
    } else {
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
  //  <>
  //  <Router>
  //   <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  //   <Alert alert={alert}/>
  //   <div className="container my-3">
  //   <Switch>
  //     <Route path='/about'>
  //       <About/>
  //     </Route>
  //     <Route path='/'>
  //     <TextForm showAlert={showAlert} heading="Enter the Text to analyze : " mode={mode}/>
  //     </Route>
  //     </Switch>  
  //     {/* <TextForm showAlert={showAlert} heading="Enter the Text to analyze : " mode={mode}/> */}
  //     {/* <About/> */}
  //   </div>
  //   </Router>
  //  </>
  <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={
                <TextForm showAlert={showAlert} heading="Enter the Text to analyze : " mode={mode}/>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
