import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { toast } from 'react-toastify';

import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';
import close from '../../assets/images/close.svg';

import { Overlay, Container, Field, FieldGroup } from './styles';

interface CreateProductData {
  brandId: string;
  name: string;
  description: string;
  price: string;
  category: string;
  subCategoryId: string;
  image: string;
}

interface SubCategory {
  id: string;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[]
}

interface Brand {
  id: number;
  name: string;
}

function ProductModal({ onClose = () => { } }) {

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [brand, setBrand] = useState<Brand[]>([]);

  const [image, setImage] = useState<any>();
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    api.get('/api/products/brand').then(response => {
      setBrand(response.data);
    });
  }, [])

  async function loadProducts() {
    api.get('/api/categories').then(response => {
      setCategories(response.data);
    });
  }

  function handleChangeCategory(event: ChangeEvent<HTMLSelectElement>) {
    const category = event.target.value

    const categoryValue = categories.find((categoriesValue) => categoriesValue.id === parseInt(category))
    if (!categoryValue) return;
    setSubcategories(categoryValue.subCategories)
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;
    setImage(event.target.files[0])
  }

  async function handleSubmit(data: CreateProductData) {
    try {
      formRef.current?.setErrors({});

      const img = image
      Object.assign(data, { image: img || '' })

      const schema = Yup.object().shape({
        brandId: Yup.string().required('Marca obrigatória'),
        name: Yup.string().required('Nome obrigatório'),
        description: Yup.string().required('Descrição obrigatória'),
        price: Yup.string().required('Valor obrigatório'),
        category: Yup.string().required('Categoria obrigatória'),
        subCategoryId: Yup.string().required('Subcategoria obrigatória'),
        image: Yup.string().required('Imagem obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formData = new FormData()

      const {
        brandId,
        name,
        description,
        price,
        subCategoryId,
      } = data;

      const productData = {
        brandId,
        name,
        description,
        price,
        subCategoryId,
      };

      const response = await api.post('/api/products', productData)
      const { id } = response.data

      formData.append('file', image)

      await api.post(`/api/products/picture/${id}`, formData
      ).then(res => console.log(res.data))
      toast.success('Produto cadastrado com sucesso')
      window.location.reload()
      loadProducts()

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
                <h2>Cadastrar novo produto</h2>
              </legend>
              <Field>
                <label htmlFor="name">Nome</label>
                <Input
                  name="name"
                  placeholder="Nome do produto"
                />
              </Field>
              <Field>
                <label htmlFor="description">Descrição</label>
                <TextArea
                  name="description"
                  id="description"
                  placeholder="Descrição" cols={5} rows={5}
                />
              </Field>

              <Field>
                <label htmlFor="url">Imagem</label>
                <Input
                  type="file"
                  name="url"
                  id="url"
                  onChange={handleImageChange}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label htmlFor="price">Preço</label>
                  <Input
                    name="price"
                    mask="currency"
                    placeholder="R$:"
                  />
                </Field>

                <Field>
                  <label htmlFor="brandId">Marca</label>
                  <Select
                    name="brandId"
                    id="brandId"
                  >
                    <option value="">escolha uma opção</option>
                    {brand.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Select>
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <label htmlFor="category">Categoria</label>
                  <Select
                    name="category"
                    id="category"
                    onChange={handleChangeCategory}
                  >
                    <option value="">selecione uma categoria</option>
                    {categories.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Select>

                </Field>
                <Field>
                  <label htmlFor="subCategoryId">Subcategoria</label>
                  <Select
                    name="subCategoryId"
                    id="subCategoryId"
                  >
                    <option value="">selecione a subcategoria</option>
                    {subcategories.map(item => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </Select>

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
