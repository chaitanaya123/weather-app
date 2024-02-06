import Card from "./Card"
import { useState } from "react";

export default function Search() {
    const [scr, setScr] = useState('');
    const [scrc, setScrc] = useState('');
  
    function handleChange(e) {
      setScr(e.target.value);
     
    }
    function handleClick(e) {
      setScrc(scr);
     
    }
  return (
    <div style={{ margin: '20px', position: 'relative' }}>
    <div style={{ padding: '20px', borderWidth: '2px', borderColor: '#ffe05d', margin: '20px' }}>
      <input type="text" placeholder="City Name" value={scr} onChange={handleChange} />
    </div>

    <div style={{ margin: '20px', marginTop: '5px' }}>
      <button style={{ backgroundColor: '#ff9642', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={handleClick}>
        Search
      </button>
    </div>
    {/* conditional rendering is applicable below
    If the value of scrc exists, then only the card component renders */}
    {scrc && <Card title={scrc} />}
    </div>
  )
}