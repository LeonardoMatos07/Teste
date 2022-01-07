const { deleteOne } = require('../models/Users')
const User = require('../models/Users')
const logger = require('pino')()




const create = async (req, res)=>{
     try{
          const {name, telefone, endereco} = req.body
          if(await User.findOne({telefone})){
               logger.warn({msg:"O contato já está registrado"})
               return res.status(400).send({hasError: true, erro: "O contato já está registrado"})
          }
          if(!name || !telefone || !endereco){
               logger.error({msg:"Não foi possivel cadastrar o contato, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel cadastrar o contato, dados incompletos"})
          }

          user = await User.create(req.body)
          logger.info({msg:"Contato cadastrado com sucesso!"})
          return res.send({user})

     } catch(err){
          console.log(err)
          logger.error({msg:"Erro no registro do contato"})
          res.status(400).send({hasError: true, erro: "Erro no registro do contato"})
     }
}


const getContact = async (req, res)=>{
     try{
          const {telefone} = req.body

          if(!telefone){
               logger.error({msg:"Não foi possivel encontrar o contato, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o contato, dados incompletos"})
          }

          contact = await User.findOne({telefone})

          if(!contact){
               logger.error({msg:"Contato não registrado!"})
               return res.status(400).send({erro:"Contato não registrado!"})
          }
          logger.info({msg:"Contato encontrado!"})
          return res.send({contact})

     } catch(err){
          logger.error({msg:"Erro ao encontrar contato"})
          res.status(400).send({erro:"Erro ao encontrar contato"})
     }
}

const deleteContact = async (req, res)=>{
     try{
          const {telefone} = req.body

          if(!telefone){
               logger.error({msg:"Não foi possivel encontrar o contato, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o contato, dados incompletos"})
          }

          contact = await User.findOne({telefone})

          if(!contact){
               logger.error({msg:"Contato não registrado!"})
               return res.status(400).send({erro:"Contato não registrado!"})
          }

          await User.deleteOne({telefone})
          logger.info({msg:"Contato deletado!"})
          return res.send("Contato deletado!")

     } catch(err){
          logger.error({msg:"Erro ao encontrar contato"})
          res.status(400).send({erro:"Erro ao encontrar contato"})
     }
}

module.exports = {create, getContact, deleteContact}