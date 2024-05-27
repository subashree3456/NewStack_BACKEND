// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
// var cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// //Connection:mongodb
// // const connect = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO);
// //     console.log("connected to Backend Data Base");
// //   } catch (error) {
// //     throw error;
// //   }
// // };
// // connect();

// const databaseConnection = async() => {
 
//   try {
//     const connection = await mongoose.connect("mongodb+srv://subashree3003:xMxYOhLk00jLv3hK@cluster0.dsbpgjo.mongodb.net/StackProjectretryWrites=true&w=majority&appName=Cluster0")
//     console.log("Connected to the mongoDB");
   

// } catch (error) {
//     console.log(error);
// }
 
// }

// databaseConnection();

// // mongodb+srv://admin:X3l66mbVjfnAW1Nb@cluster0.omkc6tc.mongodb.net/Book-StoreretryWrites=true&w=majority
// // mongodb+srv://subashree3003:xMxYOhLk00jLv3hK@cluster0.dsbpgjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 

// // xMxYOhLk00jLv3h

// const app = express();
// const router = express.Router();
// app.use("/.netlify/functions/api", router);
// //body-parse
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// // cors
// //  app.use(cors({ origin: true, credentials: true }));
// const corsOptions = {
//   origin: "*", // Update this to your frontend URL
//   optionsSuccessStatus: 200,
 
// };

// app.use(cors(corsOptions));
// // Connect Database




// // Init Middleware
// app.use(express.json({ extended: false }));
// app.use(express.json());

// // link the router
// app.use(require("./router/auth"));
// // app.use(require('./router/userauth.js'));
// app.use(require("./router/answer/AnswerCrud.js"));
// app.use(require("./router/question/QuestionCrud.js"));
// app.use(require("./router/question/QuestionPublic.js"));
// app.use(require("./router/user/UserProfile.js"));

// // Middleware
// const middleware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };
// // middleware();

// app.get("/", (req, res) => {
//   console.log("Hello skoverflosw!!");
//   res.send("Hello skoverflosw!!");
// });

// app.get("/contact", middleware, (req, res) => {
//   console.log("Hello my contact");
//   res.send("Hello Contact");
// });

// const port = process.env.PORT || 8082;

// app.listen(port, () => console.log(`Server running on port ${port}`));


const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Connection: MongoDB
const databaseConnection = async() => {
  try {
    const connection = await mongoose.connect("mongodb+srv://subashree3003:Subashree@cluster0.dsbpgjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to the mongoDB");
  } catch (error) {
    console.log(error);
  }
};

// xMxYOhLk00jLv3hK

databaseConnection();

const app = express();
const corsOptions = {
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
  maxAge: 86400  // Cache preflight response for 1 day (86400 seconds)
};
app.use(cors(corsOptions));
const router = express.Router();
app.use("/.netlify/functions/api", router);

// Body parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// CORS





// Init Middleware
app.use(express.json({ extended: false }));

// Link the router
app.use(require("./router/auth"));
app.use(require("./router/answer/AnswerCrud.js"));
app.use(require("./router/question/QuestionCrud.js"));
app.use(require("./router/question/QuestionPublic.js"));
app.use(require("./router/user/UserProfile.js"));

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

// Define routes
app.get("/", (req, res) => {
  console.log("Hello skoverflosw!!");
  res.send("Hello skoverflosw!!");
});

app.get("/contact", middleware, (req, res) => {
  console.log("Hello my contact");
  res.send("Hello Contact");
});

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
