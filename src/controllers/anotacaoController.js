import anotacaoModel from "../models/anotacaoModel.js";

class AnotacaoController {
  create = async (req, res) => { 
    const { conteudo } = req.body; 
    try {
      if (!conteudo) {
        return res.status(400).json({ erro: "Conteúdo é obrigatória" });
      }
      const novaAnotacao = await anotacaoModel.create(conteudo);
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
    const { concluida, descricao } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(Number(id), concluida, descricao);

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" });
      }

      res.json(tarefaAtualizada);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar tarefa!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await tarefaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao deletar tarefa" });
    }
  };
}

export default new AnotacaoController();