import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({type, comment, screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
}

// Separando da aplicação o contrato da interface. 
//Informando quais são as operações no banco de dados, porém ele não implementara.