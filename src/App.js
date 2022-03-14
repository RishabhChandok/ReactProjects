import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import Image1 from './Image1'
 class App extends React.Component{
     state={images:[]}
      onab1= async (c1) => {
        const a1= await axios.get('https://api.unsplash.com/search/photos',{
             params:{query:c1},
             headers:{
                Authorization: 'Client-ID WTf_vOaaPL9GWCQX3QMPnEYmr0H4P2R_3OcnRd9pKt4'
             }
         })
        
         this.setState({images:a1.data.results})
     }
     render(){
         return(
             <div>
             <SearchBar abc={this.onab1}/>
             <Image1 ab1={this.state.images}></Image1>
             
             </div>
         )
     }
 }
export default App