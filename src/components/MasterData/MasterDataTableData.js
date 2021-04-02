import React,{ Component } from 'react';
import  MasterDataTable  from "./MasterDataTable";
import config from '../../config.json';

export default class MasterDataTableData extends Component {
    constructor(){
        super();
        this.state = {
            data : [],
        }
        
      }
            
      componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(config["basehost"]+"/supportingdoc", requestOptions)
          .then(response => response.json())
          .then(result => {
              
              this.setState({data : result});

          })
          .catch(error => console.log('error', error));

      }

    render(){
        const data = this.state.data;
        let temp = [];
        if(this.props.firstDD === "all"){
            data.map((item) => temp.push(item))
            console.log(temp);
        }
        else{
            data.forEach(item => {if(item.category === this.props.firstDD)
                temp.push(item);
            });
            /*data.map((item) => {
                if(item.category === this.props.firstDD)
                    temp.push(item); 
            })*/
            console.log(temp);
        }
        
       
        return(
            <>
             <MasterDataTable data={temp}/>
            </>
        );
    }
}