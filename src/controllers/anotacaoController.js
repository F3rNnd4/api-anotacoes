import anotacaoModel from "../models/anotacaoModel.js";

class AnotacaoController {
  create = async (req, res) => { 
    const { titulo, conteudo } = req.body; 
    try {
      if (!titulo || !conteudo) {
        return res.status(400).json({ erro: "Título e Conteúdo são obrigatórios" });
      }
      const novaAnotacao = await anotacaoModel.create(titulo, conteudo);
      res.status(201).json(novaAnotacao);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao criar anotação" });
    }
  };


  getAll = async (req, res) => {
    try {
      const anotacoes = await anotacaoModel.getAll();
      res.json(anotacoes);
    } catch (error) {
      console.log(error);
      res.satus(500).json({ erro: "Erro ao buscar anotação" })
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const anotacao = await anotacaoModel.getById(Number(id));

      if (!anotacao) {
        return res.status(404).json({ erro: "Anotação não encontrada!" });
      }
      res.json(anotacao);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotação!"});
    }
  }

  update = async (req, res) => {
    const { id } = req.params;
    const { conteudo, favorita } = req.body;

    try {
      const anotacaoAtualizada = await anotacaoModel.update(Number(id), conteudo, favorita);

      if (!anotacaoAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada!" });
      }

      res.json(anotacaoAtualizada);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar anotação!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await anotacaoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.status(200).send({ message: "Anotação deletada com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao deletar anotação" });
    }
  };

  favorite = async (req, res) => {
    const { id } = req.params;
    const { favorita } = req.body;
  
    try {
      const anotacaoFavoritada = await anotacaoModel.favorite(Number(id), favorita);
  
      if (!anotacaoFavoritada) {
        return res.status(404).json({ erro: "Anotação não encontrada!" });
      }
  
      res.json(anotacaoFavoritada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao marcar anotação como favorita!" });
    }
  };
}

export default new AnotacaoController();