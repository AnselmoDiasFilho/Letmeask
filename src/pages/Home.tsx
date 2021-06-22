import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import GoogleIcomImg from '../assets/images/google-icon.svg';


export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração sinbolizando perguntas e respostas" />
                <strong>Crie sala Q&amp;A ao-vivo</strong>
                <p>Tire dúvidas sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={GoogleIcomImg} alt="Logo do Google" />
                        Crie sua sala cm o Google
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