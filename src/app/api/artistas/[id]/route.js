import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";

//End point for a sigle artist 
//
export async function GET(request, { params: { id } }) {
    const artista = await prisma.artista.findFirst({
        where: {
            id: Number(id)
        }

    })

    return NextResponse.json({
        mensaje: `Obteniendo un solo artista ${id}`
    })
}

export function DELETE(request, { params: { id } }) {
    return NextResponse.json({
        mensaje: `Eliminando al artista ${id}`
    })
}

export async function PUT(request, { params: { id } }) {
    try {
        const { nombre, banda, edad, generoMusical } = await request.json()
        const artistaUpdate = await prisma.artista.update({
            where: {
                id: Number(id)
            },
            data: {
                nombre,
                banda,
                edad: Number(edad),
                generoMusical
            }
        })
        return NextResponse.json(artistaUpdate)
    } catch (error) {

    }
}