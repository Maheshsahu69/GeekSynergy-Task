import React from 'react';
import './DetailsWall.css';
import {
    TableRow,
    TableCell,
    TableBody,
    Button,
    Table,
    TableHead
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const data = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting"
}
let  genre=[];
let director=[];
let stars=[];
let titles=[];
let voted=[];
let voting=[];
let pageViews=[];
let language=[];
let poster=[];
class DetailsWall extends React.Component {
constructor(props){
    super(props);
    this.state={
        results:[],
        showCode:false,  
        open:false
    };
    this.fetchAPIdata();
    
};
 handleClick = () => {

    this.setState({open:!this.state.open})

  };
componentDidMount(){
    this.fetchAPIdata();
}
  fetchAPIdata = () => {
        fetch('https://hoblist.com/movieList', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => {
            return res.json();
        }).then((data) => {
            console.log("data", data.result[0]);
            this.setState({showCode:true});
            for(var i=0; i<data.result.length; i++){
                genre.push(data.result[i].genre);
                director.push(data.result[i].director);
                stars.push(data.result[i].stars);
               titles.push(data.result[i].title);
               voted.push(data.result[i].voted);
               voting.push(data.result[i].voting);
               pageViews.push(data.result[i].pageViews);
               language.push(data.result[i].language);
               poster.push(data.result[i].poster);
            }

        })
            .catch((error) => {
                console.log("error", error);
            });
    }
    render() {
        return (
            <div className="outer-div-details-wall">
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center" style={{color:"white"}} className="heading" colSpan={3} > Details Wall Page</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow >
                        <TableCell  colSpan={3} align="right"  >
                        <Button color="primary" variant="outlined" onClick={this.handleClick}>Company Info</Button>
                        <div className="company-info-style">
                       { this.state.open && 
                       <div >
                        <div style={{textAlign:"left"}}> <span className="span-style">Company:</span> Geeksynergy Technologies Pvt Ltd</div>
                        <div style={{textAlign:"left"}}>  <span className="span-style">Address:</span> Sanjayanagar, Bengaluru-56</div>
                        <div style={{textAlign:"left"}}><span className="span-style">Phone:</span>XXXXXXXXX09</div>
                       <div style={{textAlign:"left"}}> <span className="span-style">Email:</span> XXXXXX@gmail.com</div>
                       </div>
                      
                       }
                        </div> 
                        </TableCell>
                    </TableRow>
                       { this.state.showCode &&
                             genre.map((gen,index)=> {
                                let dir= director.map(e=>{
                                    return e[0];    
                                });
                                let str= stars.map(star=>{
                                    return star[0];
                                });
                                let title=titles.map(ttl=>{
                                    return ttl
                                });
                                let vote=voted.map(vot=>{
                                    return vot.length  
                                });
                                let vot=voting.map(voti=>{
                                    return voti
                                });
                                let view=pageViews.map(vie=>{
                                    return vie
                                });
                                let lang=language.map(lan=>{
                                    return lan
                                });

                                let post=poster.map(po=>{
                                    return po ;
                                })
                                
                                return (
                                   
                                    <TableRow key={index} > 
                                        <TableCell>
                                            <div className="div-col-1">
                                                <div style={{padding:"5px"}}><ArrowDropUpIcon /></div>
                                               <div style={{padding:"10px"}}> {vot[index]}</div>
                                                <div style={{padding:"5px"}}><ArrowDropDownIcon /> </div>
                                                <div style={{ fontSize: "15px", fontWeight: "bold" }}>Votes</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="div-col-2">
                                                <div><img src={post[index]} alt="imageError" width="100px" /> </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="div-col-3">
                                                <div style={{ fontSize: "20px", fontWeight: "bold" }}>{title[index]}  </div>
                                                <div>Genre: <span  style={{fontWeight: "bold" }}>{gen}</span></div >
                                                <div>Director: <span  style={{fontWeight: "bold" }}> {dir[index]}</span></div >  
                                                <div>Starring:<span  style={{fontWeight: "bold" }}> {str[index]} </span> </div >
                                                <div>Mins | {lang[index]} | 2 Apr </div >
                                                <div style={{color:"#00BFFF"}}>{view[index]} views | Voted by {vote[index]} People </div >
                                                <Button color="primary" variant="contained">Watch Trailer</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                      
                        }
                    </TableBody>
                </Table>
   
            </div>
        );
    }
};

export default DetailsWall;