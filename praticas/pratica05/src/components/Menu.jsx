import Link from './Link'

function Menu() {
    const opcoes = {Home, Perfil, Sair}
    return (
        <nav><ul>{opcoes.map((opcao) =>  <li key={index}><Link texto={opcao}/></li>)}</ul></nav>
    );
}

export default Menu;