import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1388px;
  padding: 0 30px 30px;
  margin: 0 auto;

  @media (max-width: 618px) {
    padding: 0 15px 15px;
  }
`
export const FlexGraficos = styled.div`
  background: var(--White-color);
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 618px) {
    padding: 15px;
  }

  h3 {
    margin-bottom: 15px;
  }
`