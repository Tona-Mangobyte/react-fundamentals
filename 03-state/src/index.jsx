import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
    return <h1>Hello { props.name }</h1>;
}


function App(props) {
    return(
        <div>
            <Hello name={"Tona Chheun"}/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
