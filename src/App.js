import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Show from './component/show'
import Add from './component/add'

import {useDispatch,useSelector} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  const Posts  = useSelector(c=>c);

 return (
<div>

  <h1>5555</h1>
<Switch>
  <Route path="/adduser" component={Add}/>
  <Route path="/showPost" component={Show}/>

</Switch>
</div>
  );
}

export default App;
