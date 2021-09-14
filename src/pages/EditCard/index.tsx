import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Link, useParams, useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

import seta from '../../assets/images/seta-esquerda.svg';

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import { toast } from 'react-toastify';
import {
  Header,
  Container,
  Main,
  UserIcon,
  Content,
  FormEdit,
  Field,
  FieldGroup
} from './styles';


interface EditProductRequest {
  brandId: string;
  name: string;
  description: string;
  price: string;
  category: string;
  subCategoryId: string;
  image: string;
}

interface EditProduct {
  brand: Brand;
  name: string;
  description: string;
  price: string;
  category: string;
  subCategory: SubCategory;
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

interface IParamsProps {
  id: string;
}

function EditCard() {
  const history = useHistory();
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [brand, setBrand] = useState<Brand[]>([]);
  const { id } = useParams<IParamsProps>()

  const [image, setImage] = useState<any>();
  const formRef = useRef<FormHandles>(null);

  const [model, setModel] = useState<EditProduct>({
    brand: {
      id: 0,
      name: "",
    },
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: {
      id: "",
      name: "",
    },
    image: "",
  })


  useEffect(() => {
    if (id !== undefined) {
      findTask(id)
    }
  }, [id])

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

  async function findTask(id: string) {
    const response = await api.get(`/api/products/${id}`)
    setModel({
      brand: {
        id: response.data.brand.id,
        name: response.data.brand.name
      },
      name: response.data.name,
      description: response.data.description,
      price: response.data.price,
      category: response.data.categoryName,
      subCategory: {
        id: response.data.subCategory.id,
        name: response.data.subCategory.name,
      },
      image: response.data.imageURL,
    })
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

  async function handleSubmit(data: EditProductRequest) {
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
        image: Yup.string().optional(),
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

      if (!image) {
        data.image = model.image
      }

      const productData = {
        brandId,
        name,
        description,
        price,
        id,
        subCategoryId,
      };

      await api.put(`/api/products/${id}`, productData)

      formData.append('file', image)

      await api.post(`/api/products/picture/${id}`, formData)
        .then(response => console.log(response.data))

      loadProducts();

      history.push('/products/create');


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
            <Link to="/products/create">
              <img src={seta} width="24px" alt="Logotipo" />
            </Link>
            Editar
            <Link to="/user" className="avatarProfile">
              <p>Rafael <span>Ver perfil</span></p>
              <UserIcon />
            </Link>
          </Main>
        </Container>
      </Header>

      <Container>
        <Content>
          <FormEdit>
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
                    defaultValue={model.name}
                  />
                </Field>
                <Field>
                  <label htmlFor="description">Descrição</label>
                  <TextArea
                    name="description"
                    id="description"
                    defaultValue={model.description}
                    placeholder="Descrição" cols={5} rows={5}
                  />
                </Field>

                <FieldGroup>
                  <Field>
                    <div className="image">
                      <img src={model.image} alt="" />
                    </div>
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

                </FieldGroup>

                <FieldGroup>
                  <Field>
                    <label htmlFor="price">Preço</label>
                    <Input
                      name="price"
                      mask="currency"
                      defaultValue={model.price}
                      placeholder="R$:"
                    />
                  </Field>

                  <Field>
                    <label htmlFor="brandId">Marca</label>
                    <Select
                      name="brandId"
                      id="brandId"
                    >
                      <option value={model.brand.id ? model.brand.id : ""} defaultValue={model.brand.name ? model.brand.name : ""}>{model.brand.name ? model.brand.name : "Escolha uma opção"}</option>
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
                      <option defaultValue={model.category ? model.category : ""}>{model.category ? model.category : "Escolha uma oção"}</option>
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
                      <option value={model.subCategory.id ? model.subCategory.id : ""} defaultValue={model.subCategory.name ? model.subCategory.name : ""}>{model.subCategory.name ? model.subCategory.name : "Escolha uma opção"}</option>
                      {subcategories.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))}
                    </Select>

                  </Field>
                </FieldGroup>
              </fieldset>
              <Button type="submit">Atualizar</Button>
            </Form>
          </FormEdit>
        </Content>
      </Container>
    </>
  )
}
export default EditCard
