import express from 'express'
const router = express.Router()

import {
  createFeedback,
  addFeedback,
  deleteFeedback,
  getAllFeedbackforLoc,
  giveRating,
  getAllFeedback,
} from '../../controller/feedback/feedback.js'

//end-points
router.route('/').post(createFeedback).get(getAllFeedback)
router
  .route('/:id')
  .get(getAllFeedbackforLoc)
  .patch(addFeedback)
  .delete(deleteFeedback)
router.route('/ratings/:id').patch(giveRating)

export default router
