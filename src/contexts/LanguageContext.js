import React from 'react';

//creating a context object whose default value is english.
//export default React.createContext('english');

//Should be defined with capital C only. Any component we create has to have capital letter!
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = {language : 'english'}

    onLanguageChange = (language) => {
        this.setState({language});
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange : this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;