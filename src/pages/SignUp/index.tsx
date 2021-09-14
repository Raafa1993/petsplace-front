import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/images/petsLogo.svg';
import seta from '../../assets/images/seta-esquerda.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Info, ContentInfo } from './styles';

interface SigninUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SigninUpFormData) => {
    try {
      formRef.current?.setErrors({});
      const profiles = ["CONSUMER"];

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('e-mail obrigatório').email('Digite e-mail valido'),
        password: Yup.string().min(5, 'Mínimo 5 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      Object.assign(data, { profiles })

      await api.post('/api/consumers', data);

      history.push('/login');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, [history]);

  return (

    <Container>
      <Content>
        <Info>
          <ContentInfo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu logon</h1>
              <Input name="name" icon={FiUser} placeholder="Nome" />
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
              <Button type="submit">Cadastrar</Button>
            </Form>

            <Link to="login">
              <img src={seta} alt="voltar" />
              Voltar
            </Link>
          </ContentInfo>
        </Info>
      </Content>
    </Container>

  )
}

export default SignUp;
