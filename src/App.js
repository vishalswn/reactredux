import React from 'react'
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Increment/Decrememnt counter</h1>
      <h4>using react redux</h4>
      <div class="quantity">
        <a class="quantity_minus" title="Decrement" onClick={ () =>dispatch(decNumber())}><span>--</span></a>
        <input name="quantity" type="text" class="quantity__input" value={myState}/>
        <a class="quantity_plus" title="Increment" onClick={ () =>dispatch(incNumber(5))}><span>+</span></a>
      </div>
    </>
  );
}

export default App;
