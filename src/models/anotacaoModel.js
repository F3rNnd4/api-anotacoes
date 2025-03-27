import prisma from '../../prisma/client.js';

class AnotacaoModel {

  create = async (titulo, conteudo) => {
    return await prisma.nota.create({ 
      data: {
        titulo,
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

      return anotacao;
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  }

  update = async (id, conteudo, favorita) => {
    try {
      const anotacao = await prisma.nota.update({
        where: { id },
        data: { favorita: favorita !== undefined ? favorita : true, 
          conteudo },
      })
      return anotacao;
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  };

  delete = async (id) => {    
    try {
      const anotacaoDeletada = await prisma.nota.delete({
        where: { id },
      });

      return anotacaoDeletada;

    } catch (error) {
      console.log("Erro ao deletar anotacao", error);
      throw error;
    }
  };

  favorite = async (id, favorita) => {
    try {
      const anotacao = await prisma.nota.update({
        where: { id },
        data: { favorita },
      });
      return anotacao;
    } catch (error) {
      console.log("Erro ao marcar como favorita", error);
      throw error;
    }
  };
}

export default new AnotacaoModel();