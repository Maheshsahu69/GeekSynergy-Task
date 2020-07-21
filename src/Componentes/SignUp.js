import React,{useState} from 'react';
import './SignUp.css';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    let history = useHistory();
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");   
    const openLogInPage = () => {
        history.push("/login");
    }
    const onSignup = () => {
        console.log(email,number);
        if(name !=="" && password !==""){
            if(password !== confirmPassword){
                alert("password mismatch");
            }else{
            localStorage.setItem('user',name);
            localStorage.setItem('userPassword',password);
            history.push("/login");
            }  
        }
        else {
            alert("Name, Password, should not be empty.")
        }    
    }
    return (
        <div className="outer-div">
                    <Table>
                        <TableHead className="heading">
                                User Sign-Up Page
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="right">
                                <Button color="primary" onClick={() => { openLogInPage() }} > Login </Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <TextField placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <TextField placeholder="Enter password" type="password" onChange={(e)=>{setPassword(e.target.value)}} /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <TextField placeholder="Confirm password" type="password" onChange={(e)=>{setConfirmPassword(e.target.value)}} /> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <TextField placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <TextField placeholder="Enter mobile number" onChange={(e)=>{setNumber(e.target.value)}}/>
                                    </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <select className="dropdownProfession">
                                        <option>Select Profession</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="developer">Developer</option>
                                        <option value="designer">Designer</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center">
                                    <Button onClick={onSignup} color="primary" variant="outlined">
                                        Sign-Up
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
        </div>
    );
}

export default SignUp;