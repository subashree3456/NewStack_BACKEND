const express = require('express');
const router = express.Router();
const cors= require('cors');
const User = require('../../model/userSchema');
const Question = require('../../model/questionSchema');
const QuestionDetail = require('../../controllers/QuestionPublic/QuestionDetail');
const QuestionPublic = require('../../controllers/QuestionPublic/QuestionPublic');
const corsOptions = {
    origin: 'https://new-stack-frontenddd.vercel.app',  // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],  // Allow these headers
    exposedHeaders: ['Access-Control-Allow-Origin'],
    
    optionsSuccessStatus: 204,
    
  };
  router.use(cors(corsOptions));
router.get('/publicquestionsget', QuestionPublic.getPublicQuestion);
router.get('/question', QuestionDetail.getDetailQuestion);

module.exports = router;