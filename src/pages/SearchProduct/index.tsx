import React, { useEffect, useState } from 'react';
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
  ImageDraw,
  NoContent
} from './styles';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

Modal.setAppElement('#root');

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  categoryName: string;
}

interface SearchProductParams {
  searchProduct: string;
}

export interface Props {
  itemsCart?: number;
  isSelect?: boolean;
  isActive?: boolean;
}

interface CartItemsAmount {
  [key: number]: number;
}

const limit = 9

function SearchProduct() {
  const { params } = useRouteMatch<SearchProductParams>();

  const { addProduct, cart } = useCart()
  const [ItemModalOpen, setItemmodalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([])

  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productId, setProductId] = useState(0)
  const [hasOrder, setHasOrder] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      let response: any;

      response = await api.get(`/api/products/pageable/filter/name?productName=${params.searchProduct.charAt(0).toUpperCase() + params.searchProduct.slice(1)}&page=${currentPage}&linesPerPage=${limit}`);

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
  }, [currentPage, total, params]);

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

  return (
    <>
      <PageHeader />
      <Container>
        <Content>
          <div className="notFoundFilter">
            Volte e veja todos os nosso produtos!
            <Link to="/products">
              <HiArrowLeft />
            </Link>
          </div>
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

export default SearchProduct;
