const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
  getSingleBookByName,
} = require("../controllers/book-controller");

const router = express.Router();

// /**
//  * Route: /boooks
//  * Method: GET
//  * Description: Get books by id
//  * Access: Public
//  * Parameters: none
//  */

router.get("/", getAllBooks);

// /**
//  * Route: /boooks:id
//  * Method: GET
//  * Description: Get books by id
//  * Access: Public
//  * Parameters: id
//  */

router.get("/:id", getSingleBookById);

// /**
//  * Route: /boooks/issued/books
//  * Method: GET
//  * Description: Get all issued books
//  * Access: Public
//  * Parameters: none
//  */

router.get("/getbook/name/:name", getSingleBookByName);

router.get("/issued/books", getAllIssuedBooks);

// /**
//  * Route: /boooks
//  * Method: POST
//  * Description: Create new book
//  * Access: Public
//  * Parameters: none
//  * Data: author, name, genre, price, publisher, id
//  */

router.post("/", addNewBook);

// /**
//  * Route: /boooks/:id
//  * Method: POST
//  * Description: Updata book
//  * Access: Public
//  * Parameters: id
//  * Data: author, name, genre, price, publisher, id
//  */

router.put("/:id", updateBookById);

// // default export
module.exports = router;
