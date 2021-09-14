import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { toast } from 'react-toastify'
import { FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/images/petsLogo.svg';
import login from '../../assets/images/entrar.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Info, ContentForm } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite e-mail valido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/');
      window.location.reload();

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }
      toast.error('Email/Senha invalidos')
    }
  }, [signIn, history]);

  return (
    <>
      <Container>
        <Content>
          <Info>
            <ContentForm>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
              </Form>

              <Link to="signup">
                <img src={login} alt="login" />
            Criar conta
          </Link>
            </ContentForm>
          </Info>
        </Content>
      </Container>

    </>
  )
}

export default Signin;
