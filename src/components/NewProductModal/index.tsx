import { useForm, SubmitHandler } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from '../Input';
import { AiOutlineClose } from 'react-icons/ai';
import { CloseButtom, Content, Form, Overlay } from './styles';
import Button from '../Button';
import { api } from '../../services/api';
import { Textarea } from '../Textarea';

type FormNewProduct = {
  name: string;
  price: number;
  group: string;
  description: string;
}

export function NewProductModal({productList, setProductList}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormNewProduct>();

  async function handleNewProduct(data: FormNewProduct){
    const {name, price, group, description} = data
    const { data: newPreoduct }:any = await api.post('/productsList', {
      name,
      price,
      group,
      description,
    })
    setProductList([...productList, newPreoduct])
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Novo Produto</Dialog.Title>
        <CloseButtom>
          <AiOutlineClose />
        </CloseButtom>

        <Form onSubmit={handleSubmit(handleNewProduct)}>
          <Input
            type='text'
            placeholder='Nome do Produto'
            {...register('name', { required: 'Campo obrigatório' })}
            error={errors?.name?.message}
          />
          <Input
            type='text'
            placeholder='Preço do Produto'
            {...register('price', { valueAsNumber: true, required: 'Campo obrigatório' })}
            error={errors?.price?.message}
          />
          <Input
            type='text'
            placeholder='Grupo do Produto'
            {...register('group', { required: 'Campo obrigatório' })}
            error={errors?.group?.message}
          />
          <Textarea
            {...register('description')}
            placeholder='Descrição do Produto'
            rows="5"
          />
          
          <Button type='submit' buttonType='solid' disabled={isSubmitting}>
            Cadastrar
          </Button>
        </Form>

        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
