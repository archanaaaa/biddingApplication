import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function AutocompleteDD(props) {
     
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
          <TextField {...params} label={props.dropdown} variant="outlined" />
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
