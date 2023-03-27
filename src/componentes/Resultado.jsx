import styled from '@emotion/styled';
/*****************STYLED COMPONENTS / ESTILOS CSS****************/

const CajaResultado = styled.div`
    font-family: 'Montserrat', sans-serif; 
    display : flex;
    gap: 1rem;
    align-items : center; 
`;
const Texto = styled.p`
    color : #9497FF;
    span{
      font-size : 20px;
      color : #249518;
    }     
`;
const Precio = styled.p`
    font-size : 25px;
    color : #249518;   
`;
const Img = styled.img`
    display : block;
    width : 100px;
    height : 100px;
    margin-top : 19px;
    position: relative; 
    border-radius : 20px;
    display: block;
    transition: .5s;
 ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ffee10;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}
 :hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffee10;
}
 :hover {
  color: #ffee10;
  box-shadow: 0 0 5px #ffee10;
  text-shadow: 0 0 5px #ffee10;
}  
`;
/*****************The End / FIN ****************/
const Resultado = ({resultado}) => {
  /*****************recibo de app.jsx los datos de la api y los dispongo a mostrar ****************/
    const { PRICE,CHANGEPCT24HOUR,IMAGEURL,HIGHDAY,LOWDAY,LASTUPDATE } = resultado
  return (
    <div>
      <CajaResultado>
        <Img src= {`https://cryptocompare.com/${IMAGEURL}`} alt = "imagen de cripto"/>
        <div>
        <Precio>El precio es de : <span>{PRICE}</span> </Precio>
        <Texto>Cotizacion mas alta del dia : <span>{HIGHDAY}</span> </Texto>
        <Texto>Cotizacion mas baja del dia : <span>{LOWDAY}</span> </Texto>
        <Texto>Variacion ultimas 24hs : <span>{CHANGEPCT24HOUR}</span> </Texto>
        <Texto>Ultima actualizacion : <span>{LASTUPDATE}</span> </Texto>
        </div>
      </CajaResultado>
    </div>
  )
}

export default Resultado;