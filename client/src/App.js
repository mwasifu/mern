import axios from 'axios';
import {React, useState} from 'react';
function App() {
const [dummyData, setDummyData] = useState(null);

axios({
  method: 'get',
  url: 'http://localhost:9000',
  responseType: 'application/json'
}).then((response) => {
  setDummyData(response.data)
})

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p1>Getting info from server...</p1>
      <div>
        <p1>{dummyData}</p1>
      </div>
    </div>
  );
}

export default App;
