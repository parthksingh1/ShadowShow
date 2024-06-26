import { Router } from "express";
import { postQuestion, getAllQuestions } from "../controllers/questionController.js";
import { createAnswer, upvoteAnswer, downvoteAnswer } from "../controllers/answerController.js";

const QuestionRoutes = Router();
QuestionRoutes.post('/postquestions', postQuestion);
QuestionRoutes.get('/questions', getAllQuestions);
QuestionRoutes.put('/questions/:questionId/answers/:answerId/upvote', upvoteAnswer);
QuestionRoutes.put('/questions/:questionId/answers/:answerId/downvote', downvoteAnswer);
QuestionRoutes.post('/questions/:questionId/answers', createAnswer);

export default QuestionRoutes;