import { Container } from "./Grid.styles";

interface GridProps {
  children: any;
}
const Grid = ({children}:GridProps) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export {Grid}