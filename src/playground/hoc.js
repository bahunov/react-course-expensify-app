import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
      <h1>Authenticated</h1>
      <p>Auth is {props.isAuthenticated}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>please authenticate</p>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('app'));

