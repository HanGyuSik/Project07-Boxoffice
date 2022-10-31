import BoxOffice from "./boxOffice/BoxOffice";
import {Route, Routes} from "react-router-dom";
import BoxMv from "./boxOffice/BoxMv";


function App() {
  return (
    <Routes>
      <Route path='/' element={<BoxOffice/>} />
      <Route path='/mv' element={<BoxMv/>} />
    
    
    
    
    </Routes>
  );
}

export default App;
