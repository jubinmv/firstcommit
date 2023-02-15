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

// get single user by id
export const getUserById = (data,result) => {
    db.query("SELECT * FROM user WHERE id = ?",[data], (err,results)=> {
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

 // Get landcategory
export const getlandcategory = (result) => {
    db.query("SELECT * from landcategory", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};
// Get farmlands
export const getfarmland = (result) => {
    db.query("SELECT * from land WHERE category = 'farmland'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get farmlands
export const getagriland = (result) => {
    db.query("SELECT * from land WHERE category ='agriland'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// // Get ownersfarmlands
export const ownersagriland = (result) => {
    db.query("SELECT * from land WHERE category ='agriland'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// // Get ownersfarmlands
export const ownersfarmland = (result) => {
    db.query("SELECT * from land WHERE category ='farmland'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get farmers
export const viewfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get ownerpostland
export const viewpostland = (result) => {
    db.query("SELECT * from landcategory", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get crops
export const viewcrop = (result) => {
    db.query("SELECT * from crops", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};

// Get landownerfarmers
export const vfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
// Get admin farmers
export const adminfarmers = (result) => {
    db.query("SELECT * from user WHERE role = 'farmer'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get Admin landowners
 export const adminlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get Admin landowners
 export const vlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
            result(null,results);
        }
    });
};
 // Get landowners
export const viewlandowners = (result) => {
    db.query("SELECT * from user WHERE role = 'land_owner'", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            console.log(results)
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

// get farmers
// export const farmerslist = (data,result) => {
//     db.query("SELECT * FROM user WHERE email= ?",[data.email],(err,results)=> {
//         if (err){
//             console.log(err);
//             result(err,null);
//         }else{
//             result(null,results[0]);
//         }
//     });
// };

