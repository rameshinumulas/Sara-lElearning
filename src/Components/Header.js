import React, { Component } from 'react'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Saralmain from './Saralmain';

class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            search:'',
        }
    }
    SearchItem =(e)=>{
        this.setState({search:e.target.value})
    }
    render() {

        return (
            <div>
            <AppBar position="fixed" color="secondary">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" >
                        Saral
                    </Typography >
                  <input type="text" value={this.state.search} onChange={this.SearchItem}/>
               </Toolbar>
            </AppBar>
            {/* <Saralmain SearchWords={this.state.search} /> */}
            </div>
        )
    }
}
export default Header;