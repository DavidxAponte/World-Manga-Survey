import './App.css';
import Form from './components/form';
import React, {useState} from 'react'
import SurveyCard from './components/surveyCard';

function App() {
  const [visible, setVisible] = useState(true);
  const [dataSurvey, setDataSurvey] = useState({})

  return (
    <div className="App">
      <h1>World Manga Survey Form</h1>
       <p className="subtitle">We want to know more about you</p>
        {visible ? <Form visible={setVisible} dataSurvey={setDataSurvey}/> : <SurveyCard userData={dataSurvey} />}
    </div>
  );
}

export default App;
