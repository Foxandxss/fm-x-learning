import React from 'react';
import { Footer } from './footer/footer';
import { LeftNav } from './navigation/left-nav';

export function App() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/12">
          <LeftNav />
        </div>
        <div className="w-11/12 bg-red-300">TBD</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
