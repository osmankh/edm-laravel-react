import React, { Component } from 'react'
import '../../../sass/components/common/buttonWithIconOnHover.scss'

class ButtonWithIconOnHover extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <button type="submit">
                <span>{ this.props.childrenText }</span>
            </button>
        )
    }
}

export default ButtonWithIconOnHover
