import { Button } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { buyCake, addCake } from './features/redux/Slicers/cakeShopSlicer';

function App() {

  const state = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
        <p>
          {state}
        </p>
        <Button onClick={() => dispatch(addCake())}>+</Button>
        <Button onClick={() => dispatch(buyCake())}>-</Button>
    </div>
  );
}

export default App;
