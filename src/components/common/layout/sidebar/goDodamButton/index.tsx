import * as S from './style';
import Dgit_D from "@src/assets/logoAssets/DGIT_D.svg?react"

const GoDodamButton = () => {
  return (    
    <S.GoDodamButtonContainer target='_blank' href='https://dodam.b1nd.com/'>
      <Dgit_D width={24}/>
    </S.GoDodamButtonContainer>
  )
}

export default GoDodamButton