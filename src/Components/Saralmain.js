import React, { Component } from 'react';

import Box from '@material-ui/core/Box';

import { Grid, Paper } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import axios from 'axios';
import history from './history';

class Saralmain extends Component {
    constructor(props){
        super(props)
        this.state={
            SaralData:[],
            // searchingdata:this.props.SearchWords 
            
        }
    }
    componentDidMount(){
        axios.get('https://saral.navgurukul.org/api/courses')
        .then(result=>{
            console.log([result.data.availableCourses])
            this.setState({
                SaralData:result.data.availableCourses
            })

        })
        .catch(responce=>{console.log(responce,"erro workin")})
    }
    SearchItem = (e)=>{
        console.log(e.target.value)
        this.setState({Search:e.target.value})
    }
  
    InnerBUtton = (id) =>{
        // console.log(id,"okay")
        console.log(this.props,'this is props of hisotry')
        const {history} = this.props; 
        // console.log(history,"kjhuiofk")
        console.log(id)
        history.push('/innersaral',{contentId:id})
    }



    render() {
        const {SaralData}=this.state
        // console.log(this.props.SearchWords,"searching data")
        console.log(SaralData,'asdfhfdsddfh')
        // console.log(searchingdata,"this is i want")
        // {this.props.SearchWords ? :null}
        // const FilterContent=SaralData.filter(count=> {
        //      return count.name.toLowerCase()})
        //      console.log(FilterContent,"filtering dataooooooooooooooooooooooooo")
        return (
            <div>
            <Container maxWidth="md" style={{borderColor:"black",marginTop:60}}>
               <Grid item sm={12} container spacing={3} justify='space-evenly'>

               {SaralData ?
                SaralData.map((each) =>
                    <Grid item xs={4} key={each.id} style={{padding:5,marginTop:40}} >
                    <Box component="span" m={4}>
                    <ButtonBase onClick={() => {this.InnerBUtton(each.id)}}>
                    <Paper elevation={3} value={each.key} 
                        style={{padding:5,cursor:"pointer",width:270,height:60,display:"flex",fontSize:16}}>           
                        <img src={each.logo} alt="logo" style={{width:50}}/>
                        {each.name}
                        </Paper>
                    </ButtonBase>
                    </Box>                   
                    </Grid>
                ):null
                }
                </Grid>
            </Container>
            </div>
            )
        }
    }

    export default Saralmain;