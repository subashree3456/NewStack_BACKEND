const express = require('express');
const router = express.Router();
const cors= require('cors');
const User = require('../../model/userSchema');
const Question = require('../../model/questionSchema');
const QuestionDetail = require('../../controllers/QuestionPublic/QuestionDetail');
const QuestionPublic = require('../../controllers/QuestionPublic/QuestionPublic');
const corsOptions = {
   origin: "http://localhost:3000"
  };
  router.use(cors(corsOptions));
router.get('/publicquestionsget', QuestionPublic.getPublicQuestion);
router.get('/question', QuestionDetail.getDetailQuestion);

module.exports = router;