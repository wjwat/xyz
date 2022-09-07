import Button from './Button';
import { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState('red');

  return (
    <div style={{
      backgroundColor: bgColor,
      width: '100rem',
      height: '100rem'
    }}>
      <Button setState={setBgColor} bgColor={bgColor} />
    </div>
  );
}

export default App;
