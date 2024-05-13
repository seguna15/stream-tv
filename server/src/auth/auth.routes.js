import express from "express";
import { postRegister, postLogin } from "./auth.controllers.js";
import ExpressValidation from "express-joi-validation";
import { loginSchema, registerSchema } from "./auth.joi.schema.js";


const router = express.Router();
const validator = ExpressValidation.createValidator({});

router.post('/register', validator.body(registerSchema),postRegister);
router.post('/login', validator.body(loginSchema), postLogin);

export default router;