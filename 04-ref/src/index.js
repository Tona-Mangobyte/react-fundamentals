import React, {StrictMode} from 'react';
import ReactDOM from "react-dom/client";
import SimplePanelRef from "./components/simple1";

const App = () => {
    return (
        <>
            <p>Hello world!</p>
            <SimplePanelRef />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
