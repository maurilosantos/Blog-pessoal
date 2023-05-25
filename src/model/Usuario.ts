import Postagem from "./Postagem"

export interface Usuario{
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string
    postagem?: Postagem[] //linha adicionada para que o usuário possa ter uma postagem vinculada

}

export default Usuario;