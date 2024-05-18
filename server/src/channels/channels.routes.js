import express from "express";
import ExpressValidation from "express-joi-validation";
import { channelDetailsSchema } from "./channels.joi.schema.js";
import {
  getChannels,
  getChannelDetails,
  postFollowChannel,
  getFollowedChannels,
} from "./channels.controller.js";
import { verifyToken } from "../middleware/authJwt.middleware.js";

const router = express.Router();

const validator = ExpressValidation.createValidator({});

router
  .post(
    "/follow",
    verifyToken,
    validator.body(channelDetailsSchema),
    postFollowChannel
  )
  .get("/followed", verifyToken, getFollowedChannels)
  .get("/", getChannels)
  .get(
    "/:channelId",
    validator.params(channelDetailsSchema),
    getChannelDetails
  );

export default router;