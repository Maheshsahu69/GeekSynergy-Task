import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import "./Login.css";
import {
    Grid,
    TextField,
    Button,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHead
} from '@material-ui/core';
const Login = () => {
    const history=useHistory();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const onLogin=()=>{
        if(name===localStorage.user && password===localStorage.userPassword){
            history.push("/detailswall");
        }else{
            alert("invalid credentials");
        }
    }
    return (
        <div className="outer-div">
            <Grid container>
                <Table> <TableHead className="heading"> User Login Page</TableHead>
                    <TableBody>
                    <TableRow >
                        <TableCell align="center">
                            <Grid item>
                                <TextField placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
                            </Grid>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <Grid item>
                                <TextField placeholder="Enter password"  type="password" onChange={(e)=>{setPassword (e.target.value)}}/>
                            </Grid>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">
                            <Grid item>
                                <Button color="primary" variant="outlined" onClick={onLogin }> Login</Button>

                            </Grid>
                        </TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </Grid>
        </div>
    )
}
export default Login;