-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "screenshot" TEXT
);

/* Migration serve para mater um controle de versão de dados. 
Ou seja, cada vez que se cria uma nova tabela, índice, etc... 
Se tem um histórico de cada alteração feita no banco de dados.*/