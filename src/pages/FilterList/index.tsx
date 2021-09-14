import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from 'react-modal';
import { useCart } from '../../hooks/useCart';

import PageHeader from '../../components/PageHeader';
import ItemModal from '../../components/ItemsModal';
import Footer from '../../components/Footer/inde';

import bag from '../../assets/images/bag.svg'

import {
  Container,
  Content,
  ContentFilter,
  Filter,
  Category,
  NoContent,
  ProductList,
  Card,
  InfoCard,
  Info,
  Bag,
  Pagination,
  PaginationButton,
  PaginationItem,
  PreviosButton,
  NextButton,
  PreviosIcon,
  NextIcon,
  ImageDraw
} from './styles';

Modal.setAppElement('#root');

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  categoryName: string;
}

export interface Props {
  itemsCart?: number;
  isSelect?: boolean;
  isActive?: boolean;
}

interface CartItemsAmount {
  [key: number]: number;
}

interface SubCategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

const limit = 9

function FilterList() {
  const { addProduct, cart } = useCart()
  const [ItemModalOpen, setItemmodalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([])

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [categories, setCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [hasFilter, setHasFilter] = useState<Boolean>(false);
  const [hasOrder, setHasOrder] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);


  const [categoryId, setCategoryId] = useState(0)
  const [subCategoryId, setSubCategoryId] = useState(0)
  const [productId, setProductId] = useState(0)
  const [filteredId, setFilteredId] = useState('');

  const loadSubcategory = useCallback((id: string) => {
    const category = categories.find(category => category.id === parseInt(id));
    if (!category) return;
    setSubCategories(category.subCategories)
    setCategoryId(category.id)
    setHasFilter(true)
  }, [categories])

  useEffect(() => {
    async function loadProducts() {
      let response: any;
      setFilteredId(window.location.search.replace('?category=', ''))

      if (hasFilter && !filteredId) {
        response = await api.get(`/api/products/pageable/filter/category?categoryId=${categoryId}&page=${currentPage}&linesPerPage=${limit}`);
      } else if (filteredId) {
        response = await api.get(`/api/products/pageable/filter/category?categoryId=${filteredId}&page=${currentPage}&linesPerPage=${limit}`);
        loadSubcategory(filteredId)
      }
      else {
        response = await api.get(`/api/products/pageable/?page=${currentPage}&linesPerPage=${limit}`);
      }

      if (subCategoryId !== 0 && hasFilter) {
        response = await api.get(`/api/products/pageable/filter/subCategories?subCategoriesIds=${subCategoryId}&page=${currentPage}&linesPerPage=${limit}`)
      }

      if (!response.data.content.length) {
        setHasOrder(false)
        setIsLoading(false)
      } else {
        setHasOrder(true);
      }

      setTotal(response.data["totalElements"]);
      const totalPages = Math.ceil(total / limit);

      const arrayPages = [];
      for (let i = 0; i < totalPages; i++) {
        arrayPages.push(i);
      }

      setPages(arrayPages as any);
      setProducts(response.data.content);
      setIsLoading(false)

    }
    loadProducts()
  }, [currentPage, total, hasFilter, categoryId, subCategoryId, filteredId, loadSubcategory]);

  useEffect(() => {
    api.get('/api/categories').then(res => setCategories(res.data))
  }, [])

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount
    return sumAmount
  }, {} as CartItemsAmount)

  function handleOpenItemModal(id: number) {
    setItemmodalOpen(true);
    setProductId(id)
  }

  function handleCloseItemModal() {
    setItemmodalOpen(false);
  }

  function handleAddCart(id: number) {
    addProduct(id)
  }

  function handleLoadSubcategory(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked && event.target.value !== "all") {
      const category = categories.find(category => category.id === parseInt(event.target.value));
      if (!category) return;
      setSubCategories(category.subCategories)
      setCategoryId(category.id)
      setSubCategoryId(0)
      setHasFilter(true)
      setFilteredId('')
      window.history.pushState('', '', '/products');
      return;
    }
    setFilteredId('')
    window.history.pushState('', '', '/products');
    setSubCategories([])
    setHasFilter(false)
  }

  function handleLoadProductBySubcategory(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setSubCategoryId(parseInt(event.target.value))
      return;
    }
  }

  return (
    <>
      <PageHeader />

      <Container>
        <Content>

          <ContentFilter>
            <Filter>
              <h1>Categorias</h1>
              <Category>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      defaultChecked={window.location.search ? false : true}
                      onChange={handleLoadSubcategory}
                    />
                    <span>Todos</span>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <input
                        type="radio"
                        name="category"
                        defaultChecked={category.id === parseInt(filteredId) ? true : false}
                        value={category.id}
                        onChange={handleLoadSubcategory}
                      />
                      <span>{category.name}</span>
                    </li>
                  ))}
                </ul>
              </Category>
            </Filter>
            <Filter>
              <h1>Subcategorias</h1>
              <Category>
                <ul>
                  {subCategories.map(subCategory => (
                    <li key={subCategory.id}>
                      <input
                        type="radio"
                        name="subcategory"
                        value={subCategory.id}
                        onChange={handleLoadProductBySubcategory}
                      />
                      <span>{subCategory.name}</span>
                    </li>
                  ))}

                </ul>
              </Category>
            </Filter>
          </ContentFilter>

          <ProductList>
            {hasOrder ? (
              products.map((product) => (
                <Card key={product.id}>
                  <button
                    type="button"
                    onClick={() => handleOpenItemModal(product.id)}
                  >
                    <img src={product.imageURL} width={"147px"} alt="Foto illustrativa" />
                  </button>
                  <InfoCard>
                    <button
                      type="button"
                      onClick={() => handleOpenItemModal(product.id)}
                    >
                      <Info>
                        <p>{product.name}</p>
                        <span>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(product.price)}
                        </span>
                      </Info>
                    </button>
                    <Bag
                      type="button"
                      onClick={() => handleAddCart(product.id)}
                      itemsCart={cartItemsAmount[product.id] || 0}
                    >
                      <img src={bag} alt="sacola de compras" />
                    </Bag>
                  </InfoCard>
                </Card>
              ))
            ) : <NoContent> {isLoading ? <Loader
              type="ThreeDots"
              color="#ea1d2c"
              height={100}
              width={100}
              timeout={3000}
            /> : <ImageDraw />} </NoContent>}
          </ProductList>
        </Content>
        <Pagination>
          <PaginationButton>
            <PreviosButton
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage < 1}
              isActive={currentPage < 1}
            >
              <PreviosIcon />
            </PreviosButton>
            {pages.map((page) => (
              <PaginationItem
                isSelect={page === currentPage}
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={page === currentPage}
              >
                {page + 1}
              </PaginationItem>
            ))}
            <NextButton
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
              isActive={currentPage === pages.length - 1}
            >
              <NextIcon />
            </NextButton>
          </PaginationButton>
        </Pagination>
      </Container>

      <ItemModal
        isOpen={ItemModalOpen}
        onRequestClose={handleCloseItemModal}
        productId={productId}
      />

      <Footer />
    </>
  )
}

export default FilterList;
