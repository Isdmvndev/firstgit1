import crudService from '../services/CRUDservice'
import db from '../models/index'

let getHomePage = async (req,res) =>{
    try {
        let data = await db.User.findAll();
        
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
  
}

let getCrud = async(req,res) =>{

    return res.render('crud.ejs',{
    })
}

let postCrud = async (req,res) => { 
  let message= await crudService.createNewUser(req.body);
  console.log(message);
    return res.send('post crud');
}

let displayCrud =async(req,res)=>{
    let data = await crudService.getAllUser();
    return res.render('displayCRUD.ejs',{
        data:data
    })
}

let getEditCrud =  async(req,res)=>{
    let userId = req.query.id;
    if(userId){
        let userData = await crudService.getUserInfoById(userId);
       if(userData){
        return res.render('editCRUD.ejs',{
            user:userData
        })
       }
       else{
        return res.send("User not found!")
       }
    }
    else{
        return res.send("User not found!")
    }
    
}

let putCrud = async(req,res)=>{
    let data = req.body;
    let allUsers= await crudService.updateUserData(data);
    return res.render('displayCRUD.ejs',{
        data:allUsers
    })
}

let deleteCrud = async(req,res)=>{
    let userId = req.query.id;
    if(userId){
        let allUsers= await crudService.deleteUserData(userId);
        return res.render('displayCRUD.ejs',{
            data:allUsers
        })
    }
    else{
        res.send('User not found')
    }
}
module.exports = {
    getHomePage: getHomePage,
    getCrud:getCrud,
    postCrud:postCrud,
    displayCrud: displayCrud,
    getEditCrud:getEditCrud,
    putCrud:putCrud,
    deleteCrud:deleteCrud,
}