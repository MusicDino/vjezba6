import { Component } from 'react'

class Komponenta extends Component{
    constructor(props) {
        super(props)
        console.log(this)
    }
    render() {
        return (
            <>
            <h1>Komponenta</h1>
            <h2>{this.props.title}</h2>
            </>
        )
    }
}

export default Komponenta