import React from "react";
import ImageCard from './ImageCard'
import './ImageCard.css'

class Image1 extends React.Component{
    //state={images1:[]}
    ab12=()=>{
        const image1=this.props.ab1.map((user,i)=>{
            return <ImageCard src1={this.props.ab1[i].urls.regular}/>
        })
        return image1
    }
 render(){
     
     return(
         <div className="image12">
         {this.ab12()}
         </div>
     )

 }   
}
export default Image1