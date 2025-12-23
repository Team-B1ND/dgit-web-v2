import { IconButtonContainer } from '@src/styles/iconButtonContainer';
import Dgit_D from "@src/assets/logoAssets/DGIT_D.svg?react"

const GoDodamButton = () => {
  return (
    <IconButtonContainer>
      <a target="_blank" href="https://dodam.b1nd.com/" style={{ display: "flex" }}>
        <Dgit_D width={24} />
      </a>
    </IconButtonContainer>
  );
}

export default GoDodamButton