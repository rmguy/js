import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// React component
// This whole thing is rendered by index.js as a single App component
// It has child components (Menu)
// State: 
// - Here Menu renders View using current state. A view is essentially 
//   a function call that renders, or returns render ready html. 
//   Typically a view is something like:
//     map((foo) => return {<div>foo.name</div>};)
// - Populating state down to a child is roundabout; Eg: Call Menu,
//   Menu's constructor calls back into the super which populates 
//   props with specified state. 
// - State can be passed back from child to parent. Usually aggregated 
//   into a common ancestor. 
// Events: 
//  - Take arrow functions as a parameter
// Lifecycle: 
//  - Mount, Updating (view update), Unmounting
//  - Different methods invoked by react during each stage
//  - Rerendering happens when state changes. This triggers several 
//    lifecycle method hooks in addition to render.
//    * componentDidMount: component mounted into dom
//    * shouldComponentUpdate: component never updates in lifecycle.
//    * getSnapshotBeforeUpdate: remember scroll position
//    * componentDidUpdate: invoked iff component updated (returning empty div doesn't count)
//
// Types of components:
// - Presentational: rely on parent for app state. Only keep UI state 
//   locally (i.e what's popped up). Contain markup.
// - Container: Fetch data, track changes. Updating central state based on
//   UI on screen. Wrap views returned by presentation components to .
//   position.
//
//  Functional components: 
//  - Class components always return a view and often have local state. 
//  - JS function that returns 1 or more js elements. Receives props. No lifecycle. No local state.
//    * Presentational components good candidates for functional components.
class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
