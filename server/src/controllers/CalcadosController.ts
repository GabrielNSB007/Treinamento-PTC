import { Request, Response } from "express";
import prisma from "@database";

export const createCalcado = async (req: Request, res: Response) => {
    
    try{

        const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body

        if(!nome_produto|| !cor || !marca || !tamanho || !preco || !quantidade_em_estoque){
            return res.status(404).json({
                message: "Preencha todas as informações obrigatórias"
            })
        }

        const calcado = await prisma.calcado.create({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            }
        })

        return res.status(201).json({
            message: "Calçado criado com sucesso"
        })


    }catch (error){
        return res.status(400).json({
            message: "Erro ao criar calçado"
        })
    }
}

export const readAllCalcado = async (req:Request, res: Response) => {

        try {

        const calcados = await prisma.calcado.findMany();

        if (!calcados){
            return res.status(404).json({
                message: "Nenhum calçado criado ainda."
            })
        }

        return res.status(200).json(calcados)

    } catch (error){
        return res.status(400).json({
            message: "Erro ao buscar calçados",
            error,
        })
    }
}

export const updateCalcado = async (req:Request, res:Response) => {

    try {

        const {id} = req.params
        const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body


        const update = await prisma.calcado.update({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            },
            where: {
                id: parseInt(id)
            }
        })

        return res.status(200).json({
            message: "Informação atualizada com sucesso"
        })

    } catch(error){
        return res.status(400).json({
            message: "Erro ao atualizar informação"
        })
    }
}

export const deleteCalcado = async (req:Request, res:Response) => {
    try{

        const {id} = req.params
        const deletar = await prisma.calcado.delete({
            where: {
                id : parseInt(id)
            }
        })

          return res.status(200).json({
            message: "Calçado excluido com sucesso"
        })

    } catch(error){
        return res.status(400).json({
            message: "Erro ao excluir calçado"
        })
    }
}
