import { Component, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse";
import Divider from '@mui/material/Divider';



const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize: 16,
            fontWeight: 550
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 500
        },
        body1: {
            fontSize: 20,
            fontWeight: 520,
        },
        body2: {
            fontSize: 15,
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
    },
});


const SideInfo = (props) => {
    const CardAttr = props.car;

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="model-name"
        subheader={
        <ListSubheader component="div" id="model-name">
          {CardAttr.modelName}
        </ListSubheader>
      }
    >
        <ListItemButton onClick={handleClick}>
            <ListItemText primary="Features & Specs" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItemText primary={CardAttr.country+": "+CardAttr.city} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"Year: "+CardAttr.year} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"Mileage: "+CardAttr.mileage} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"Capacity: "+CardAttr.maximumSeating} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"Price: "+CardAttr.price} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"ExteriorColor: "+CardAttr.exteriorColor} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"InteriorColor: "+CardAttr.interiorColor} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"ListingColor: "+CardAttr.listingColor} sx={{ pl: 4 }}/>
        </List>
        <Divider />
        <List component="div" disablePadding>
            <ListItemText primary={"Engine: "+Object.keys(CardAttr)} sx={{ pl: 4 }}/>
        </List>
        <Divider />
      </Collapse>

    </List>
    );
}


class PopoutWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            handleClose: this.props.handleClose,
            open: this.props.open
        };
    };


    handleClose = () => {
        this.setState({open: false
        });
        this.props.handleClose(false);
    };

    render(){
        const car = this.props.car;
        return (
            <div className='Dialog'>
                <Dialog
                    open={this.state.open}
                    onClose={this.props.handleClose}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    fullWidth="true"
                    maxWidth="md"
                >
                    <DialogTitle id="scroll-dialog-title"> {car.year} {car.makeName}
                     {"               "}
                        <Button autoFocus color="inherit" onClick={this.handleClose}>
                        X
                        </Button>
                    </DialogTitle>
                        <DialogContent dividers={true}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                tabIndex={-1}
                            >
                                 {<Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={8}>
                                        <div>
                                                <img className="img"
                                                    alt="Car Image"
                                                    src={car.mainPictureUrl
                                                    }
                                                    width="100%"
                                                    height="auto"
                                                />
                                        </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <SideInfo car={car}></SideInfo>
                                        </Grid>
                                    </Grid>
                                 </Box>}
      


                            </DialogContentText>    
                        </DialogContent>


                </Dialog>

            </div>
        )
    }
}



export default (PopoutWindow);