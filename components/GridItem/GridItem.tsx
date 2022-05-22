import { Container } from "./GridItem.styles";

interface GridItemProps {
  children?: any
  color: 'red' | 'green' | 'white';
  size?: 'small' | 'medium' | 'large'
  noPadding?: boolean
  center?: boolean
  onClick?: () => void
}
const GridItem = ({color, size, onClick, center = false, noPadding = false, children}:GridItemProps) => {
  return(
    <Container 
      color={color} 
      size={size} 
      onClick={onClick}
      $noPadding={noPadding}
      $center={center}
      $clicable={!!onClick}
    >
      {children}
    </Container>
  )
}

export {GridItem}