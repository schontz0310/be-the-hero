import { FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';
import '../../global.css';

interface RegisterData{
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleRegister = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const data: RegisterData = {
        name,
        email,
        whatsapp,
        city,
        uf,
      };

      try {
        const response = await api.post('ongs', data);
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
      } catch (error) {
        alert('Erro no Cadadsstro, tente novamente');
      }
    }, [city, email, history, name, uf, whatsapp],
  );
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadasto, entre na plataforma e ajude pessoas
            a encontrarem os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleRegister}>

          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
