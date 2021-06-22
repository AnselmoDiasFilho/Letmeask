import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import GoogleIcomImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';


export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração sinbolizando perguntas e respostas" />
                <strong>Crie sala Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={GoogleIcomImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )


}