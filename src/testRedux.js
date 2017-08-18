import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './testRedux/components/Counter'
import counter from './testRedux/reducers'

const rootEl = document.querySelector('#init')

import configureStore from './testRedux/store/store.js';
const store = configureStore();

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)