import React from 'react';
import Layout from './Components/Layout/Layout';
import BargarBuilder from './Containers/BargarBuilder/BargarBuilder';

class App extends React.Component{
  render() {
    return (
      <div>
         <Layout> 
        <BargarBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
