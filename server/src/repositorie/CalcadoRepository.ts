import { Request, Response } from "express";
import prisma from "@database";

export const readAllSizeCalcado = async (req:Request, res:Response) => {
        
    try {

        const {size} = req.params

        const calcados = await prisma.calcado.findMany({
            where : {
                tamanho: parseInt(size)
            }
        });

        if (!calcados){
            return res.status(404).json({
                message: "Nenhum calçado desse tamanho criado ainda."
            })
        }

        return res.status(200).json(calcados)

    } catch (error){
        return res.status(400).json({
            message: "Erro ao buscar calçado específico",
            error,
        })
    }
}

export const readAllBrandCalcado = async (req:Request, res:Response) => {
        
    try {

        const {brand} = req.params

        const calcados = await prisma.calcado.findMany({
            where : {
                marca: brand
            }
        })

        if (!calcados){
            return res.status(404).json({
                message: "Nenhum calçado dessa marca criado ainda."
            })
        }

        return res.status(200).json(calcados)

    } catch (error){
        return res.status(400).json({
            message: "Erro ao buscar calçado específico",
            error,
        })
    }
}
export const readStock = async (req:Request, res:Response) => {
        
    try {

        const totalStock = await prisma.calcado.aggregate({
            _sum: {
                quantidade_em_estoque: true
            }
        })

        if (!totalStock){
            return res.status(404).json({
                message: "Nenhum calçado criado ainda."
            })
        }

        return res.status(200).json(totalStock)

    } catch (error){
        return res.status(400).json({
            message: "Erro ao buscar estoque",
            error,
        })
    }
}