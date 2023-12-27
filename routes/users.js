const express = require("express");

// JSON data import
const {users} = require("../data/users.json");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");

const router = express.Router();


/**
 * Route: /users
 * Method: GET
 * Desciption: Get all users
 * Access: Public
 * Paramters: None
 */
// router.get("/",(req,res)=>{
//     res.status(200).json({
//         success: true,
//         data: users
//     })
// })

router.get("/", getAllUsers)



/**
 * Route: /users/:id
 * Method: GET
 * Desciption: Get single user by id
 * Access: Public
 * Paramters: id
 */
// router.get("/:id",(req, res)=>{
//     const {id} = req.params;
//     const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     }
//     return res.status(200).json({
//         success: true,
//         data: user
//     })
// })


router.get("/:id", getSingleUserById)

/**
 * Route: /users
 * Method: POST
 * Desciption: Create a new user
 * Access: Public
 * Paramters: None
 */
// router.post("/", (req, res)=>{
//     const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;

//     const user = users.find((each)=> each.id === id);

//     if(user){
//         return res.status(404).json({
//             success: false,
//             message: "User already exist with the given Id"
//         })
//     }
//     users.push({
//         id,
//         name,
//         surname,
//         email,
//         subscriptionType,
//         subscriptionDate
//     });
//     return res.status(201).json({
//         success: true,
//         data: users
//     })
// })


router.post("/", createNewUser)


/**
 * Route: /users/:id
 * Method: PUT
 * Desciption: Updating a user by id
 * Access: Public
 * Paramters: ID
 */
// router.put("/:id", (req, res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     }
//     const updatedUser = users.map((each)=>{
//         if(each.id===id){
//             return {
//                 ...each,
//                 ...data
//             };
//         }
//         return each
//     })
//     return res.status(200).json({
//         success: true,
//         data: updatedUser
//     })
// })


router.put("/:id", updateUserById)


/**
 * Route: /users/:id
 * Method: DELETE
 * Desciption: Deleting a user by id
 * Access: Public
 * Paramters: ID
 */
// router.delete("/:id", (req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success: false,
//             message: "User Not Found"
//         })
//     }
//     const index = users.indexOf(user);
//     users.splice(index, 1);

//     return res.status(200).json({
//         success: true,
//         data: users
//     })
// })

router.delete("/:id", deleteUser)


/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Desciption: Get all user subscription details
 * Access: Public
 * Paramters: Id
 */
// router.get("/subscription-details/:id", (req, res)=>{
//     const {id} = req.params;

//     const user = users.find((each)=> each.id ===id);

//     if(!user)
//     return res.status(404).json({
// success: false,
// message: "User Not Found"
// })

// const getDateInDays = (data = "") => {
//     let date;
//     if(data === ""){
//         date = new Date();
//     }else{
//         date = new Date(data);
//     }
//     let days = Math.floor(date/(1000*60*60*24));
//     return days
// };

// const subscriptionType = (date) => {
//     if(user.subscriptionType === "Basic"){
//         date = date + 90
//     }else if(user.subscriptionType === "Standard"){
//         date = date + 180
//     }else if(user.subscriptionType === "Premium"){
//         date = date + 365
//     }
//     return date;
// };

// // Subscription expirtaion calc
// // Jan 1 1970 //milliseconds
// let returnDate = getDateInDays(user.returnDate);
// let currentDate = getDateInDays();
// let subscriptionDate = getDateInDays(user.subscriptionDate);
// let subscriptionExpiration = subscriptionType(subscriptionDate);

// const data = {
//     ...user,
//     subscriptionExpired: subscriptionExpiration < currentDate,
//     daysLeftForExpiration:
//         subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
//         fine:
//             returnDate < currentDate ? subscriptionExpiration <= currentDate ? 200 : 100 : 0, 
// }

//     return res.status(200).json({
//         success: true,
//         data,
//     })

// })

router.get("/subscription-details/:id", getSubscriptionDetailsById);

module.exports = router;