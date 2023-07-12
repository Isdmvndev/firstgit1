import db from "../models/index"
import bcrypt from "bcryptjs"
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'],
                    raw: true
                })
                let checkPassword = await bcrypt.compareSync(password, user.password);
                if (checkPassword) {
                    userData.errCode = 2;
                    userData.Message = "Success";
                }
                else {
                    userData.errCode = 1;
                    userData.Message = "Wrong pass";
                    delete user.password
                    userData.User = user
                }
            }
            else {

                userData.errCode = 1;
                userData.Message = "Error email";
                resolve(userData);
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}


let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin
}