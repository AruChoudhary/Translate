import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    // //Using context type - single context object inside a component
    // // This is how we hook up context object to a class component. We have to declare it like this only
    // static contextType=LanguageContext;

    // render() {
    //     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    //     return(
    //         <button className="ui button primary">
    //             {text}
    //         </button>
    //     );
    // }

    //Using consumer - we use Consumer anytime we want information out of multiple different context object inside a single component.
    renderSubmit(language){
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }
    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    //Only child we can pass through a consumer is a function
    render() {
        return(
            <ColorContext.Consumer>
                {(color)=>this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;