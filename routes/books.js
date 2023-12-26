const express = require("express");

// JSON data import
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");

const {UserModel, BookModel} = require("../models");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook } = require("../controllers/book-controller");
const { updateBookById } = require("../controllers/book-controller");

const router = express.Router();


/**
 * Route: /books
 * Method: GET
 * Desciption: Get all books
 * Access: Public
 * Paramters: None
 */
// router.get("/", (req, res)=>{
//     res.status(200).json({success: true, data:books})
// })

router.get("/", getAllBooks);

/**
 * Route: /books/:id
 * Method: GET
 * Desciption: Get book by its ID
 * Access: Public
 * Paramters: Id
 */
// router.get("/:id",(req, res)=>{
//     const {id} = req.params;

//     const book = books.find((each)=>each.id === id);

//     if(!book)
//     return res.status(404).json({
//         success:false,
//         message: "Book Not Found"
// })

// return res.status(200).json({
//     success: true,
//     data: book
// })
// })


router.get("/:id",getSingleBookById)

/**
 * Route: /books/issued
 * Method: GET
 * Desciption: Get all issued books
 * Access: Public
 * Paramters: None
 */
// router.get("/issued/books", (req, res)=>{
//     const usersWithIssuedBooks = users.filter((each)=>{
//         if(each.issuedBook) return each;
//     })

//     const issuedBooks = [];

//     usersWithIssuedBooks.forEach((each)=>{
//         const book = books.find((book)=> book.id ===each.issuedBook);

//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;

//         issuedBooks.push(book)
//     })
//     if(issuedBooks.length===0)
//     return res.status(404).json({
// success: false,
// message: "No issued books yet"
// })

// return res.status(200).json({
//     success: true,
//     data: issuedBooks
// })
// })

router.get("/issued/books", getAllIssuedBooks)


/**
 * Route: /books
 * Method: POST
 * Desciption: Create a New Book
 * Access: Public
 * Paramters: None
 */
// router.post("/", (req, res)=>{
//     const {data} = req.body;

//     if(!data){
//         return res.status(400).json({
//             success: false,
//             message: "No data provided"
//         })
//     }
//     const book = books.find((each)=> each.id ===data.id)

//     if(book){
//         return res.status(404).json({
//             success: false,
//             message: "Book with given id already exists"
//         })
//     }
//     const allBooks = [...books, data]

//     return res.status(201).json({
//         success: true,
//         data: allBooks
//     })
// })


router.post("/", addNewBook)

/**
 * Route: /books/:id
 * Method: PUT
 * Desciption: Update a book
 * Access: Public
 * Paramters: Id
 */
// router.put("/:id", (req,res)=>{
//     const {id} = req.params;
//     const {data} = req.body;

//     const book = books.find((each)=>each.id===id);

//     if(!book){
//         return res.status(400).json({
//             success: false,
//             message: "Book Not Found with the Given ID"
//         })
//     }
//     const updateData = books.map((each)=>{
//         if(each.id===id){
//             return {...each, ...data};
//         }
//         return each;
//     })

//     return res.status(202).json({
//         success: true,
//         data: updateData
//     })
// })


router.put("/:id", updateBookById)

module.exports = router;