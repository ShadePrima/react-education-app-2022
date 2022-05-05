import React from 'react';

class Toggle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {isToggleOn: true}
        this.hendleClick = this.hendleClick.bind(this)
    }

    hendleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render () {
        return(
            <button onClick={this.hendleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        )
    }
}

export default Toggle
