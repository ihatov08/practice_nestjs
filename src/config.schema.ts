import * as Joi from '@hapi/joi';

export const configValicationSchema = Joi.object({
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_PORT: Joi.number().default(5432).required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_USERNAME: Joi.string().required(),
  POSTGRES_DATABASE: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
});
