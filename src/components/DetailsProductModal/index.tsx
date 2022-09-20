import { useForm, SubmitHandler } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from '../Input';
import { AiOutlineClose } from 'react-icons/ai';
import { CloseButtom, Content, InfosContainer, InfosItem, Overlay } from './styles';
import Button from '../Button';
import { api } from '../../services/api';
import { Textarea } from '../Textarea';
import { useEffect, useState } from 'react';
import { ProductList } from '../../pages/Produtos/styles';
import { priceFormatter } from '../../utils/formatter';

type ProductType = {
  name: string;
  price: number;
  group: string;
  description: string;
}
type ProductProp = {
  id: number;
}

export function DetailsProductModal({id}: ProductProp) {
  const [product, setProduct] = useState<ProductType>()

  async function handleDetailsProduct() {
    const response = await api.get(`/productsList/${id}`)
    setProduct(response.data)
  }

  useEffect(() => {
    handleDetailsProduct()
  }, [])

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Detalhes do Produto</Dialog.Title>
        <CloseButtom>
          <AiOutlineClose />
        </CloseButtom>

        <InfosContainer>
          <InfosItem>
            <small>Nome:</small>
            <h3>{product?.name}</h3>
          </InfosItem>
          <InfosItem>
            <small>Valor:</small>
            <h3>{priceFormatter.format(product?.price)}</h3>
          </InfosItem>
          <InfosItem>
            <small>Grupo:</small>
            <h3>{product?.group}</h3>
          </InfosItem>
          <InfosItem>
            <small>Descrição:</small>
            <p>{product?.description}</p>
          </InfosItem>
        </InfosContainer>


        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
