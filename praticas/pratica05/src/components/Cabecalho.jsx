import Icone from './Icone'
import Titulo from './Titulo'
import InputPesquisar from './InputPesquisar'

function Cabecalho () {
    return (
        <header>
            <div>
                <Icone imagem="Logo do Aplicação" />
                <Titulo texto="Aluno Online" />
            </div>
            <div>
                <InputPesquisar />
                <Icone imagem="" texto="Icone Pesquisar" />
            </div>
        </header>
    );
}

export default Cabecalho;