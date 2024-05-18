import express from "express";
import ExpressValidation from 'express-joi-validation';
import { verifyToken } from "../middleware/authJwt.middleware.js";
import { getChannelSettings, patchPassword, putChannelSettings } from "./settings.controller.js";
import { channelSettingsSchema, passwordSettingsSchema } from "./settings.joi.schema.js";


const router = express.Router();

const validator = ExpressValidation.createValidator({});

router
.get("/channel", verifyToken, getChannelSettings)
.put('/channel', verifyToken, validator.body(channelSettingsSchema), putChannelSettings)
.patch("/password", verifyToken, validator.body(passwordSettingsSchema), patchPassword)


export default router;