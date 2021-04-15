import React, {Component} from 'react'

class Heading extends Component{
    constructor(props){
        super(props)
        this.state = {text: ''}
    }
    render() {
        return <h1>{this.props.text}</h1>
    }
}

export default Heading