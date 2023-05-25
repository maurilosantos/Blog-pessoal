import Tema from './Tema'
import Usuario from './Usuario';

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    data: string
    tema?: Tema| null
    usuario?: Usuario | null //linha adicionada para vincular um usuário
}

export default Postagem;