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
import "./styles.css";

const outerTheme  = createTheme({
    typography: {
        body1: {
            fontSize: 18,
            fontWeight: 700,
            color:'#2a343d',
        },
    },
});

const innerTheme  = createTheme({
    typography: {
        body1: {
            fontSize: 15,
            fontWeight: 300,
            color:'#2a343d',
        },
    },
});


const SideInfo = (props) => {
    const CardAttr = props.car;

    const [open, setOpen] = useState(true);
    const [openSpec, setOpenSpec] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickSpec = () => {
        setOpenSpec(!openSpec);
    };

    return(
        <ThemeProvider theme={outerTheme }>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            style={{ color: '#2a343' }}
            component="nav"
            aria-labelledby="model-name"
            subheader={
                <Typography variant="root">
                <ListSubheader component="div" id="model-name">
                    <span className='SubHeaderSpec'>{CardAttr.modelName}</span>
                </ListSubheader>
                </Typography>
            }
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Overview" />
            </ListItemButton>
            <Divider />
            <ThemeProvider theme={innerTheme }>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                            <ListItemText primary={CardAttr.country + ": " + CardAttr.city} sx={{ pl: 4 }} />
                    </List>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItemText primary={"Year: " + CardAttr.year} sx={{ pl: 4 }} />
                    </List>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItemText primary={"Mileage: " + (' ' && CardAttr.mileage)+' mi'} sx={{ pl: 4 }} />
                    </List>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItemText primary={"Capacity: " + CardAttr.maximumSeating } sx={{ pl: 4 }} />
                    </List>
                    <Divider />
                    <List component="div" disablePadding>
                        <ListItemText primary={"Price: $" + CardAttr.price} sx={{ pl: 4 }} />
                    </List>
                    {CardAttr.exteriorColor && <Divider />}
                    {CardAttr.exteriorColor &&
                    <List component="div" disablePadding>
                        <ListItemText primary={"Exterior Color: " + CardAttr.exteriorColor} sx={{ pl: 4 }} />
                    </List>}
                    {CardAttr.interiorColor && <Divider />}
                    {CardAttr.interiorColor  &&
                    <List component="div" disablePadding>
                        <ListItemText primary={"Interior Color: " + CardAttr.interiorColor} sx={{ pl: 4 }} />
                    </List>}
                    {CardAttr.listingColor && <Divider />}
                    {CardAttr.listingColor && <Divider /> && <List component="div" disablePadding>
                        <ListItemText primary={"Listing Color: " + CardAttr.listingColor} sx={{ pl: 4 }} />
                    </List>}
                </Collapse>
            </ThemeProvider>
            <ListItemButton onClick={handleClickSpec}>
                <ListItemText primary="Features & Specs" />
            </ListItemButton>
            <Divider />
            <ThemeProvider theme={innerTheme }>
                <Collapse in={openSpec} timeout="auto" unmountOnExit>
                    {/*<List component="div" disablePadding>
                        <ListItemText primary={"Options: " + Object.keys(CardAttr) + "  " + typeof (CardAttr.majorOptions.keys())} sx={{ pl: 4 }} />
                    </List>*/}
                    {CardAttr.majorOptions.keys &&
                    <List component="div" disablePadding>
                        <ListItemText primary={CardAttr.majorOptions +'\n'} sx={{ pl: 4 }} />
                    </List>
                    }
                </Collapse>
            </ThemeProvider>
        </List>
        </ThemeProvider>
    );
}


class PopoutWindow extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: this.props.open
        };
    this.handleClosePopAll = this.handleClosePopAll.bind(this);
    };

    handleClosePopAll = () => {
        this.props.handleClose();
    }

    render() {
        const car = this.props.car;
        const handleClose = this.props.handleClose;
        return (
            <div className='Dialog'>
                <Dialog
                    open={this.props.open}
                    onClose={handleClose}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    fullWidth={true}
                    maxWidth="md"
                >
                    <DialogTitle id="scroll-dialog-title"
                    > 
                    <span className='headerWord'>{car.year} {car.makeName}</span>
                    <span className='headerButton'>
                        <Button className='headerButtonStyle'autoFocus color="inherit" 
                                onClick={handleClose}
                               >
                            X
                        </Button>
                    </span>
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
                                                alt="No Image"
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