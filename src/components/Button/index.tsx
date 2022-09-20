import { Empty, OutLined, Solid } from './styles';

type Props = {
  buttonType: string;
  IconLeft?: any;
  IconRight?: any;
  margin?: string;
  children: string;
  onClick?: any;
  type: any;
  disabled?: boolean;
};

export default function Button({ buttonType, IconLeft, IconRight, type, ...rest }: Props) {
  switch (buttonType) {
    case 'solid':
      return (
        <Solid type={type} {...rest}>
          {IconLeft && <IconLeft />}
          {rest.children}
          {IconRight && <IconRight />}
        </Solid>
      )
    case 'outLined':
      return (
        <OutLined {...rest}>
          {IconLeft && <IconLeft />}
          {rest.children}
          {IconRight && <IconRight />}
        </OutLined>  
      )
    case 'empty':
      return (
        <Empty>
          <span onClick={() => rest.onClick()}>
              {IconLeft && <IconLeft />}
              {rest.children}
          </span>
        </Empty>
      );
    default:
      return null;
  }
}
