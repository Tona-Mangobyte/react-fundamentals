import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { useOnlineStatus } from "./helper";

function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function Hello(props) {
    return <h1>Hello { props.name }</h1>;
}

function App(props) {
    return(
        <div>
            <Hello name={"Tona Chheun"}/>
            <StatusBar />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
