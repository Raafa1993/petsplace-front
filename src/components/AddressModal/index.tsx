import React, { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

import Input from '../Input';
import Button from '../Button';
import close from '../../assets/images/close.svg';

import { Overlay, Container, Field, FieldGroup } from './styles';
import api from '../../services/api';

interface CreateAddressData {
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

function ProductModal({ onClose = () => { } }) {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const [adress, setAdress] = useState<Address>({} as Address)
  const { user } = useAuth()

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

  async function handleSubmit(data: CreateAddressData) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        zipcode: Yup.string().required('CEP obrigatório'),
        address: Yup.string().required('Endereço obrigatório'),
        number: Yup.string().required('Numero obrigatório'),
        complement: Yup.string().required('Complemento obrigatório'),
        neighborhood: Yup.string().required('Bairro obrigatório'),
        uf: Yup.string().required('UF obrigatoria'),
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
        address,
        complement,
        neighborhood,
        number,
        consumerId: user.id,
        uf,
        zipcode,
      };

      await api.post('/api/destinies', productData)

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
      <Overlay>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <h2>Cadastrar novo endereço</h2>
              </legend>
              <Field>
                <label htmlFor="zipcode">Cep</label>
                <Input
                  name="zipcode"
                  placeholder="Cep"
                  onBlur={onblurCep}
                />
              </Field>
              <Field>
                <label htmlFor="address">Endereço</label>
                <Input
                  name="address"
                  placeholder="Endereço"
                  defaultValue={adress?.logradouro}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label htmlFor="number">Numero</label>
                  <Input
                    name="number"
                    placeholder="Numero"
                  />
                </Field>

                <Field>
                  <label htmlFor="complement">Complemento</label>
                  <Input
                    name="complement"
                    placeholder="Complemento"
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <label htmlFor="neighborhood">Bairro</label>
                  <Input
                    name="neighborhood"
                    placeholder="Bairro"
                    defaultValue={adress?.bairro}
                  />
                </Field>
                <Field>
                  <label htmlFor="uf">UF</label>
                  <Input
                    name="uf"
                    placeholder="UF"
                    defaultValue={adress?.uf}
                  />
                </Field>
              </FieldGroup>

            </fieldset>
            <Button type="submit">Cadastrar</Button>
          </Form>
          <button type="button" onClick={onClose} >
            <img width="48px" src={close} alt="Fechar modal" />
          </button>
        </Container>
      </Overlay>
    </>
  )
}

export default ProductModal;
