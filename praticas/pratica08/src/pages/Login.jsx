import FormLogin from "./FormLogin";
import Conteudo from "../components/Conteudo";
import Rodape from "../components/Rodape";


function Login(){
    return (
        <>
        <Conteudo>
            <h1>Aluno Online</h1>
            <FormLogin />
        </Conteudo>
        <Rodape/>
        </>
    );
}

export default Login;