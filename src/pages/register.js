import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import api from '../services/api';

export default function Register() {
  const [login, setLogin] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('users', { login });

      localStorage.setItem('login', login);
      localStorage.setItem('name', response.data.name);

      navigate.push('/home');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="">
      <section className="">
        <form onSubmit={handleLogin}>
          <h1>Registre-se</h1>

          <h2>Se você tem uma conta registrada</h2>

          <div className="flex">
            <h2 className="mr-1">Você pode</h2>

            <Link className="text-yellow-600" href="/">
              Entrar aqui!
            </Link>
          </div>

          <input
            className="block border-b-2 border-black"
            placeholder="Email"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            className="block border-b-2 border-black"
            placeholder="Nome de usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className="block border-b-2 border-black"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="block border-b-2 border-black"
            placeholder="Confirmar senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
