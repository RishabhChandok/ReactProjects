import React from 'react'
import { render } from 'react-dom'
class SearchBar extends React.Component{
    state={term:null}
    ab=(c)=>{
this.setState({term:c})
//console.log(this.state.term)
    }
    ab1=(event)=>{
        event.preventDefault()
        this.props.abc(this.state.term)

    }
    render(){
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.ab1}>
                    <div className='ui fileds'>
                        <label>
                           <h1 style={{textAlign:'center'}}>Search Images Here.....</h1> 
                        </label>
                        <input type='text' onChange={(e)=>this.ab(e.target.value)}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar