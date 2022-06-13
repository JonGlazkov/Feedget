import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './usecases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (request, response) => {
  const {type, comment, screenshot} = request.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailerAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailerAdapter,
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })



  return response.status(201).send()
})