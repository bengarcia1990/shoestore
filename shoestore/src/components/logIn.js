import React from 'react';
import '../stylesheets/navBar.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { name: '', password: '' };
    }

    handleInputChange = (e) =>
        this.setState({ [e.target.name]: e.target.value })

    submitLogin = (e) => {
        e.preventDefault();
        (this.state)
            .then(token => window.location = '/').catch(err => console.log(err));
    }

    render() {
        return (
            <div className="log-in-container">
                <div>
                    <div className="log-in-header"><p>Log in </p></div>
                    <div>
                        <form onSubmit={this.submitLogin}>
                            <div className="log-in-un">
                                <label>Name:</label>
                                <input type="text"
                                    name="name" onChange={this.handleInputChange} />
                            </div>
                            <div className="log-in-pw">
                                <label>Password:</label>
                                <input type="password"
                                    name="password" onChange={this.handleInputChange} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login; 