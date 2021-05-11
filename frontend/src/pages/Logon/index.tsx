import { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import '../../global.css';

import herosImg from '../../assets/heros.png';
import logoImg from '../../assets/logo.svg';

interface UserId{
  id: string;
}

export default function Logon() {
  const [accessCode, setAccessCode] = useState<UserId>({ id: '' });
  const history = useHistory();

  const handleLogin = useCallback(
    async (event:FormEvent) => {
      try {
        event.preventDefault();
        const response = await api.post('sessions', { id: accessCode.id });
        localStorage.setItem('ongId', accessCode.id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
      } catch (error) {
        alert('Falha no login, tente novamente.');
      }
    }, [history, accessCode.id],
  );
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo" srcSet="" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            value={accessCode.id}
            onChange={(e) => setAccessCode({ id: e.target.value })}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Heros" srcSet="" />
    </div>
  );
}
