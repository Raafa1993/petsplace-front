import React, { useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { useHistory, useParams } from 'react-router';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import PetsLogo from '../../assets/images/petsLogoRed.svg';

import {
  Header,
  Container,
  Main,
  Content,
  Field,
  FieldGroup,
  UserIcon
} from './styles';

interface CreateAddressData {
  address: string;
  complement: string;
  consumerId: string;
  neighborhood: string;
  number: string;
  uf: string;
  zipcode: string;
}

interface EditAddress {
  address: string;
  complement: string;
  consumerId: string;
  neighborhood: string;
  number: string;
  uf: string;
  zipcode: string;
}

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
}

interface IParamsProps {
  id: string;
}

function EditAddress() {
  const history = useHistory();
  const { user } = useAuth()
  const { id } = useParams<IParamsProps>()
  const formRef = useRef<FormHandles>(null);

  const [adress, setAdress] = useState<Address>({} as Address)
  const [dataAddress, setDataAddress] = useState<EditAddress>({} as EditAddress)

  function onblurCep(event: React.FocusEvent<HTMLInputElement>) {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setAdress(data)
      });
  }

  useEffect(() => {
    if (id !== undefined) {
      findTask(id)
    }
  }, [id])

  async function findTask(id: string) {
    const response = await api.get(`/api/destinies/${id}`)
    setDataAddress(response.data)
  }

  async function handleSubmit(data: CreateAddressData) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        zipcode: Yup.string().required('CEP obrigatório'),
        address: Yup.string().required('Endereço obrigatório'),
        number: Yup.string().required('Numero obrigatório'),
        complement: Yup.string().required('Complemento obrigatório'),
        neighborhood: Yup.string().required('Bairro obrigatório'),
        uf: Yup.string().required('UF obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const {
        address,
        complement,
        neighborhood,
        number,
        uf,
        zipcode,
      } = data;

      const productData = {
        id,
        address,
        complement,
        neighborhood,
        number,
        consumerId: user.id,
        uf,
        zipcode,
      };

      await api.put(`/api/destinies/${id}`, productData)

      console.log(productData)

      toast.success('Endereço cadastrado com sucesso')

      history.push('/user');


    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        toast.error('Houve um problema ao criar este produto')
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <>
      <Header>
        <Container>
          <Main>
            <Link to="/">
              <img src={PetsLogo} alt="Logotipo" />
            </Link>
            <Link to="/user" className="avatarProfile">
              <p>Rafael <span>Ver perfil</span></p>
              <UserIcon />
            </Link>
          </Main>
        </Container>
      </Header>


      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <h2>Editar endereço</h2>
              </legend>
              <Field>
                <label htmlFor="zipcode">Cep</label>
                <Input
                  name="zipcode"
                  placeholder="Cep"
                  onBlur={onblurCep}
                  defaultValue={dataAddress.zipcode}
                />
              </Field>
              <Field>
                <label htmlFor="address">Endereço</label>
                <Input
                  name="address"
                  placeholder="Endereço"
                  defaultValue={adress?.logradouro ? adress?.logradouro : dataAddress.address}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label htmlFor="number">Numero</label>
                  <Input
                    name="number"
                    placeholder="Numero"
                    defaultValue={dataAddress.number}
                  />
                </Field>

                <Field>
                  <label htmlFor="complement">Complemento</label>
                  <Input
                    name="complement"
                    placeholder="Complemento"
                    defaultValue={dataAddress.complement}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <label htmlFor="neighborhood">Bairro</label>
                  <Input
                    name="neighborhood"
                    placeholder="Bairro"
                    defaultValue={adress.bairro ? adress.bairro : dataAddress.neighborhood}
                  />
                </Field>
                <Field>
                  <label htmlFor="uf">UF</label>
                  <Input
                    name="uf"
                    placeholder="UF"
                    defaultValue={adress?.uf ? adress.uf : dataAddress.uf}
                  />
                </Field>
              </FieldGroup>

            </fieldset>
            <Button type="submit">Cadastrar</Button>
          </Form>

        </Content>
      </Container>
    </>
  )
}

export default EditAddress;
