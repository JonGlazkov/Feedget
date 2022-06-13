export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>; //Ao transformar PrismaFeedbacksRepository em assíncrona devemos alterar de => void para => Promise<void> pois uma função assíncrona retorna uma promessa. 
}

//Contrato