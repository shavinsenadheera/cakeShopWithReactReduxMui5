import { useState } from 'react';

import { Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { buyCake, addCake, buyMore } from './features/redux/Slicers/cakeShopSlicer';

function App() {

  const state = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <div>
        <p style={{textAlign: 'align'}}>
          {state}
        </p>
        <Button
          variant='contained' 
          color='secondary' 
          onClick={() => dispatch(addCake())}
        >+</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => dispatch(buyCake())}
        >-</Button>
        <input text={state} onChange={(e) => setValue(e.target.value)} />
        <Button
          variant='contained'
          color='primary'
          onClick={() => dispatch(buyMore(Number(value)))}
        >++</Button>
    </div>
  );
}

export default App;
