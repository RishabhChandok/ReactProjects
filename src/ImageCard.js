import React from 'react'
import './ImageCard.css'
class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.abc12=React.createRef()
        this.state={span:0}
        console.log('constructor')
    }
    avc=()=>{
        console.log(this.abc12.current.clientHeight,'rishabh test branch');
        const span1=Math.ceil(this.abc12.current.clientHeight/10)
        this.setState({span:{span1}})
        console.log('hrd1',this.state.span)
    }
    componentDidMount(){
        this.abc12.current.addEventListener('load',this.avc)

    }
    render(){
        
        return (
            <div style={{gridRowColumn:`span ${this.state.span}`}}>
               <img  ref={this.abc12} src={this.props.src1}></img>
            </div>
        )
    }
}
export default ImageCard