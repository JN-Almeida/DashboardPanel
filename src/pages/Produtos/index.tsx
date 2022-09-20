import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import * as Dialog from '@radix-ui/react-dialog';
import * as Toast from '@radix-ui/react-toast';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { api } from '../../services/api';
import { priceFormatter } from '../../utils/formatter';
import {
  ActionsButtons,
  Container,
  DeleteButton,
  DetailsButton,
  HeaderList,
  ProductList,
  ProductListItem,
} from './styles';
import { NewProductModal } from '../../components/NewProductModal';
import { DetailsProductModal } from '../../components/DetailsProductModal';

type ProductType = {
  id: number;
  name: string;
  group: string;
  price: number;
};

export function Produtos() {
  const [productList, setProductList] = useState<[ProductType]>();
  const [openToast, setOpenToast] = useState(false);
  console.log(productList)

  async function getListProduct() {
    const response = await api.get('/productsList');
    console.log(response);
    setProductList(response.data);
  }
  useEffect(() => {
    getListProduct();
  }, []);

  function handleDeleteProduct(id: number) {
    api.delete(`/productsList/${id}`);

    const newList = productList?.filter(produto => produto.id !== id)
    setProductList(newList)
    setOpenToast(true);
  }

  return (
    <Container>
      <HeaderList>
        <h3>Produtos</h3>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button type='button' buttonType='solid' onClick={() => {}}>
              Novo Produto
            </Button>
          </Dialog.Trigger>
          <NewProductModal productList={productList} setProductList={setProductList} />
        </Dialog.Root>
      </HeaderList>

      <ProductList>
        <ProductListItem>
          <strong>id</strong>
          <strong>Produto</strong>
          <strong>Valor</strong>
          <strong>Grupo</strong>
        </ProductListItem>
        {productList &&
          productList.map((item: ProductType, index: number) => {
            return (
              <ProductListItem key={index}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{priceFormatter.format(item.price)}</p>
                <p>{item.group}</p>
                <ActionsButtons>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <DetailsButton title='Detalhes'>
                        <AiOutlinePlusCircle />
                      </DetailsButton>
                    </Dialog.Trigger>
                    <DetailsProductModal id={item.id} />
                  </Dialog.Root>
                  <Toast.Provider>
                    <DeleteButton
                      title='Deletar'
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      <MdDelete />
                    </DeleteButton>
                    <Toast.Root duration={500} open={openToast} onOpenChange={setOpenToast}>
                      <Toast.Description>Deletado!</Toast.Description>
                    </Toast.Root>
                  </Toast.Provider>
                </ActionsButtons>
              </ProductListItem>
            );
          })}
      </ProductList>
    </Container>
  );
}
