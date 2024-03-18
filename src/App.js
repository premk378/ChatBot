import './App.css';
import ChatUI from './ChatUI';

function App() {
  return (
    <div className="app">
      <div className="main-ui row">
        <div className="col-sm-12 col-md-4 col-lg-3 history">
          
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9 chat-body">
          <ChatUI></ChatUI>
        </div>
      </div>
    </div>
  );
}

export default App;
