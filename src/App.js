import React from "react";

import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import AllNotes from "./pages/AllNotes";
import Counter from "./pages/Counter";
import NewNote from "./pages/NewNote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <p>
        This will be a React Multi App with a Note Taking Function, Counter, and
        backend functionality
      </p>

      
        <div>
          <AllNotes />
        </div>

        <div>
          <Counter />
        </div>

        <div>
          <NewNote />
        </div>

        <div>
          <NotFound />
        </div>

    </Layout>
  );
}

export default App;
