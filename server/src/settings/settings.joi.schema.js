import Joi from 'joi';

export const channelSettingsSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    description: Joi.string().min(10).max(200).required(),
    title: Joi.string().min(3).max(30).required(),
    avatarUrl: Joi.string().uri().required()
})

export const passwordSettingsSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  newPassword: Joi.string().min(6).max(12).required(),
});