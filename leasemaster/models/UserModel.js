// import connection
import db from "../config/database.js";

// get all user
export const getAllUser = (result) => {
    db.query("SELECT * FROM user", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// get single user
export const getUserByEmail = (data,result) => {
    db.query("SELECT * FROM user WHERE email = ?",[data.email], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// get single user
export const userLogin = (data,result) => {
    db.query("SELECT id, email,fullName, role FROM user WHERE email = ? AND password = ?",[data.email, data.password], (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};

// insert User
export const insertUser = (data,result) => {
    db.query("INSERT INTO user SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// Add lands
export const insertland = (data,result) => {
    db.query("INSERT INTO land SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

 // Add landcategory
export const insertlandcategory = (data,result) => {
    db.query("INSERT INTO landcategory SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
 
// Add Crop
export const insertcrops = (data,result) => {
    db.query("INSERT INTO crops SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};

// Add cropcategory
export const addcropcat = (data,result) => {
    db.query("INSERT INTO cropcategory SET ?",data, (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};



