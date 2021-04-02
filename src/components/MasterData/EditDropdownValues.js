import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Table, Card, CardBody, CardHeader,Button } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import "../style.css";
import config from "../../config.json";
import MaterialDatatable from "material-datatable";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
//import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

function AutocompleteDD(props){
     
  var temp = []
  props.options.map((item)=>{
      temp.push({
          title : item.value,
      });
  })
  const optionsForDD = temp;
  console.log(temp);

const [value, setValue] = React.useState(null);
const [open, toggleOpen] = React.useState(false);

const handleClose = () => {
  setDialogValue({
    title: '',
  });

  toggleOpen(false);
};

const [dialogValue, setDialogValue] = React.useState({
  title: '',
});


const handleSubmit = (event) => {
  event.preventDefault();
  setValue({
    title: dialogValue.title,
  });

  handleClose();
};

return (
  <React.Fragment>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          // timeout to avoid instant validation of the dialog's form.
          setTimeout(() => {
            toggleOpen(true);
            setDialogValue({
              title: newValue,
            });
          });
        } else if (newValue && newValue.inputValue) {
          toggleOpen(true);
          setDialogValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      id="free-solo-dialog-demo"
      options={optionsForDD}
      getOptionLabel={(option) => {
        // e.g value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;        
        
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      renderOption={(option) => option.title}
      style={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField style={{ width: "100%" }} {...params} label={props.dropdownName} variant="outlined" />
      )}
    />
    
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Add new option</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Did you miss any option in our list? Please, add it!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={dialogValue.title}
            onChange={(event) => setDialogValue({ ...dialogValue, title: event.target.value })}
            label="title"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  </React.Fragment>
);
}

export default class EditDropdownValues extends Component {
  constructor() {
    super();
    this.state = {
      dropDownData : [],
      chosenOption : "",
      data : [],
      showTable : false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  

  handleChange=(e)=>{
    this.setState({[e.target.id] : e.target.value , showTable : false,});
    console.log("chosen : ",this.state.chosenOption)
  }

  handleLoad=(e)=>{
    e.preventDefault();
    this.setState({showTable : true});  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(config["baseHost"] + "/masterdata/" + this.state.chosenOption, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      this.setState({ data : result});
    })
    .catch(error => console.log('error', error)); 

  }

  async componentDidMount() {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch(config["baseHost"] + "/masterdata/masterdatakey", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState ({dropDownData : result})
      })
      .catch(error => console.log('error', error)); 

    
    }

    dropdownValuesTable (temp)  {
        console.log(temp);
    
      return (
        
        
        <Table>
        
          <thead>
            <tr>
              <th>Select</th>
              <th>Value</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {temp.map(item => 
                <tr key={item.id}>
                    <td><input type="checkbox"></input></td>
                    <td>{item.value}</td>
                    <td><i className="fa fa-pencil"></i></td>
                    <td><i className="fa fa-trash"></i></td>
                </tr>
            )}
          </tbody>
        </Table>
      );
    }

    render() {
        return (
          <>
            <div className="wrapper">
              <SideBar />
              <div className="main-container">
                <Container>
                  <Row>
                    <Col md={3}></Col> 
                    <Col md={6}>
                      <center>
                      <AutocompleteDD options={this.state.dropDownData} dropdownName={""}/>
                      </center>
                     </Col>
                   <Col md={3}></Col> 
                  </Row>
                  <Row>
                    <Col md={5}></Col>
                    <Col><center>
                    <Button  className="mt-2" onClick={this.handleLoad}>Load</Button>
                    </center></Col>
                    <Col md={5}></Col>
                  </Row>
                  <Row className="mt-3">
                        {this.state.showTable && 
                             this.dropdownValuesTable(this.state.data)
                        }
                  </Row>
                </Container>
              </div>
            </div>
          </>
        );
      }
    }
    