import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1388px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: 618px) {
    padding: 0 15px;
  }
`
export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button{
    width: inherit;
  }
`
export const ProductList = styled.ul`
  list-style: none;
  padding: 15px 0;
`
export const ProductListItem = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 0.5fr;
  padding: 10px 30px;
  border-bottom: solid 1px #cecece;

  @media (max-width: 618px) {
    padding: 10px 15px;
    grid-template-columns: 0.3fr 1.5fr 1.5fr 1fr 0.5fr;
  }
`
export const DeleteButton = styled.button`
  color: #d31d1d;
`
export const DetailsButton = styled.button`
  color: var(--primary-color);
`

export const ActionsButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    border: 0;
    background: transparent;
    font-size: 22px;
    line-height: 0;
    cursor: pointer;
    @media (max-width: 618px) {
      font-size: 20px;
    }
  }
`
