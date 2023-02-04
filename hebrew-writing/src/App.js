
import './App.css';
import React, {useState} from 'react';


function App() {
  const [value, setValue] = React.useState("");
  const [fontSize, setFontSize] = useState(36);
  const handleChange = (event) => {
    setFontSize(event.target.value);
  };

  const numbers = []
  const createNumbers = () => {
    for (let i = 20; i <= 100; i += 2) {
      numbers[i] = i;

    }
    
  }



  createNumbers();

  
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{fontSize: "50px", fontFamily: "serif"}}>אני ❤️ עברית</h2>
        
        <select value={fontSize} onChange={handleChange}>
        {numbers.map((number) => (
        <option key={number} value={number}>
          {number}
        </option>
      ))}
      </select>

      <div className="text-box">
       <textarea
         value={value}
         onChange={(event) => setValue(event.target.value)}
         style={{
          fontFamily: "My Font",
           fontSize: `${fontSize}px`,
           height: "500px",
           width: "80%",
           marginTop: "40px",
           textAlign: "right",
           padding: "10px 10px 10px 10px"
         }}
       />
     </div>
       
  
    
      </header>
    </div>
  );
}



export default App;

