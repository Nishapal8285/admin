import axios from 'axios';
import React from 'react';
import './style.css';

class Assign1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:[],
            change:"none",
            id:null
        }
    }
    
    async componentDidMount(){
        let response = await axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D");
        this.setState({user:response.data})
        console.log(this.state.user)
        
    }
    handleClick=(id)=>{
        this.setState({id:id, change:"block" ,})

    }
     
    
    render(){
        return(
            

    <main>

        <div id="table-section">

            <form action="/">
                <img src='' alt=''/>
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" value="" />
            </form>

            <div id="table-wrapper">

            
                    <table>
                        <thead>
                            <tr>
                                <th className="column1">Id</th>
                                <th className="column2">FirstName</th>
                                <th className="column3">LastName</th>
                                <th className="column4">Email</th>
                                <th className="column5">Phone</th>
                            </tr>
                        </thead>
                    
                

                
                    
                         
                        <tbody>
                            
                        {this.state.user.map(item=>{ 
                        return <tr className="data-row"  onClick={()=>this.handleClick(item.id)} key={item.id}>
                                <td className="column1">{item.id}</td>
                                <td className="column2">{item.firstName}</td>
                                <td className="column3">{item.lastName}</td>
                                <td className="column4">{item.email}</td>
                                <td className="column5">{item.phone}</td>
                            </tr>
                        
    })}
                            

                        </tbody>
                    </table>
                    
                </div>

            </div>

    


       

        <div id="info-wrapper">
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
            {this.state.user.map(item=>
            item.id===this.state.id ?<div id="info-content" style={{display: `${this.state.change}` }}>
                <div><b>User selected:</b> {item.firstName} {item.lastName}</div>
                <div>
                    <b>Description: </b>
                    <div id="descrip">
                        {item.description}
                        </div>
                </div>
                <div><b>Address:</b>{item.address.streetAddress} </div>
                <div><b>City:</b>{item.address.city}</div>
                <div><b>State:</b>{item.address.state}</div>
                <div><b>Zip:</b>{item.address.zip}</div>
            </div>:''
            )}
        </div>
    
    </main>

        )
    }
}
export default Assign1;
