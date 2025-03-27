import prisma from '../../prisma/client.js';

class AnotacaoModel {
  create = async (conteudo) => {
    return await prisma.nota.create({ 
      data: {
        conteudo
      }
    })
  };

  getAll = async () => {
    return await prisma.nota.findMany();
  };

  getById = async (id) => {
    try {
      const anotacao = await prisma.nota.findUnique({
        where: { id }
      })
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  }

  update = async (id, concluida, descricao) => {
    try {
      const tarefa = await prisma.task.update({
        where: { id },
        data: { concluida: concluida !== undefined ? concluida : true, descricao },
      })
      return tarefa;
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  };

  delete = async (id) => {    
    try {
      const tarefaDeletada = await prisma.task.delete({
        where: { id },
      });

      return tarefaDeletada;

    } catch (error) {
      console.log("Erro ao deletar tarefa", error);
      throw error;
    }
  };
}

export default new AnotacaoModel();