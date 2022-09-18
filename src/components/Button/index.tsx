import { Empty, OutLined, Solid } from './styles';

type Props = {
  type: string;
  IconLeft?: any;
  IconRight?: any;
  margin?: string;
  children: string;
  onClick: any;
};

export default function Button({ type, IconLeft, IconRight, ...rest }: Props) {
  switch (type) {
    case 'solid':
      return (
        <Solid {...rest}>
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
