import { useHistory } from 'react-router-dom'
import { FormEvent } from 'react';

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import GoogleIcomImg from '../assets/images/google-icon.svg';

import { Button } from '../components/button'
import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss';



export function Home() {
    const history = useHistory();
    const { user, singInWithGoogle } = useAuth()


    async function handleCreateRoom() {

        if (!user) {
            await singInWithGoogle()
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {

    }


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
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={GoogleIcomImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )


}