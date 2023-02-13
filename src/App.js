import React from 'react';
import { CakeView } from './features/cake/CakeView';
import { UserView } from './features/user/UserView';
import { IcecreamView } from './features/icecream/IcecreamView';

function App() {
  return (
    <div >
        <CakeView/>
        <UserView/>
        <IcecreamView/>
    </div>
  );
}

export default App;
