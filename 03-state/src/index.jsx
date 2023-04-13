import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Profile from "./components/Profile";


function App(props) {
    return(
        <div>
            <Profile />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
