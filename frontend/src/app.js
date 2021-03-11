import Header from './components/Header';
import Sidebar from './components/Sidebar';

// import User from './components/User';

function App() {
  const template = `
   <div
      class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
    >
          ${Header()}
          ${Sidebar()}
    </div>
  `;
  // Return a new node from template
  return template;
}

export default App;
