import { PrismaClient } from '@prisma/client';

// Creamos una instancia de Prisma
const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Traemos de la base de datos las categorias
    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true,
        },
    });
    res.status(200).json(categorias);
}
