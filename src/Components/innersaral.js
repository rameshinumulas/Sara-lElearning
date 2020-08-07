import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';



import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';

import Box from '@material-ui/core/Box';
import { Paper, Grid} from '@material-ui/core';

import ReactMarkdown from 'react-markdown';


class Innersaral extends Component {
    constructor(props) {
        super(props)   
        this.state = {
            coursecontent:[],
            diplaycontent:[]

        }
    }
    componentDidMount() {
        console.log(this.props, 'propsss')
        const {location} = this.props;
    // console.log(location, 'kkkkkkkkkkkkkkkkkkkk');

        // API call 

         const id = location.state.contentId;
        console.log(location,"hello")
        axios.get(`https://saral.navgurukul.org/api/courses/${id}/exercises`)
        .then(course=>{console.log(course.data.data,"content")
            this.setState({coursecontent:course.data.data})})
        .catch(error=>{console.log(error)})
    }

    exiceseButton=(slug)=>{
    const {location} = this.props;
    const id = location.state.contentId;
    console.log(slug,"ssssssssssssssssssss")
    axios.get(`https://saral.navgurukul.org/api/courses/${id}/exercise/getBySlug?slug=${slug}`)
    .then(res=>
        {console.log(res.data,"main slug working")
            this.setState({diplaycontent:[res.data]})
        })
}


    render() {
        console.log(this.props.location)
        console.log(this.state.coursecontent,"state data")
        const {diplaycontent}=this.state
        const allowed = ['link']
        return (
            <div>

            <Grid container sm={12}>
                <Grid item xs={4} style={{padding:80}}>
               <AppBar position="static" color="secondary" style={{width:320,height:70,textAlign:"center",marginLeft:20}}>
                   <span style={{marginTop:30}}>    ENROLL IN COURSE </span>
            </AppBar>
            <Box color="text.primary" m={4}>   
                    {this.state.coursecontent.map(exicese=><div>
                        <ButtonBase onClick={()=>this.exiceseButton(exicese.slug)}>
                            <Paper key={exicese.id} variant="elevation" elevation={3} style={{fontSize:15,width:260,height:60,textAlign:"center",marginTop:5}}>         
                                       <h3>
                                           {exicese.name}
                                        
                                        {exicese.childExercises.map(one=><div>{one.name}</div>)}

                                           
                                        </h3> 

                            </Paper>
                          
                        </ButtonBase>
                        
                    </div>
                )}
                </Box>
                </Grid> 
                <Grid item xs={7} style={{marginTop:100}}> 
                {diplaycontent.map(display =>
                <Paper variant="elevation" elevation={3} style={{textAlign:"left",width:"auto",height:"auto",marginRight:40}}>
                <div style={{marginLeft:30}}>
                <ReactMarkdown
                // allowedTypes={allowed}
                source={display.content}
                />
                </div>
                </Paper>
               )}
            </Grid>
            </Grid>
            </div>
        )
    }
}
export default Innersaral;













       