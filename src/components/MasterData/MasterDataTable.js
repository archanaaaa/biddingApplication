import React,{ Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import MaterialDatatable from "material-datatable";


export default class MasterDataTable extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
      }

      tableData = () => {
        console.log(this.props.data)
        const { length: count } = this.props.data;
        const { data } = this.props;
       
        // if (count === 0) return <p>There are no Action Plan in the database</p>;
        const columns = [
          
          {
            name: 'Attachment Type ', 
            field: 'attachmentType'
          },
          {
            name: 'Document Name', 
            field: 'attachmentName'
          },
          {
            name: 'Version', 
            field: 'version'
          }, 
          {
            name: 'Updated by', 
            field: 'lastChangedBy'
          }, 
          {
            name: 'Updated date', 
            field: 'lastChangedDate'
          },
      ];
      
      const options = {
          filterType: 'checkbox',
      };
    
        return (
          <>
          <Container>
            <Row>
              <Col>
              <p>Showing {count} rows in the table</p>
                    
    
                    <MaterialDatatable
                      title={"Attachment Type"}
                      data={data}
                      columns={columns}
                      options={options}
                      />
              </Col>
            </Row>
          </Container>
            
                    
                  
          </>
        ); 
      }
      settingData = () => {
          const data = this.state.data;
          let temp = data.filter(item => {
            return item.category === this.props.firstDD
          })
          let count = temp.length;
          
          
          console.log(temp);
      }



    render(){
        return(
            <>
             {this.tableData()}
            </>
        );
    }
}
