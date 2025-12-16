import { PageLayoutContainer } from "@src/styles/pageContainer"
import { PropsWithChildren } from "react"

const HonorLayout = ({ children }: PropsWithChildren) => {
  return (
    <PageLayoutContainer>
      <p>명예의 전당</p>
      {children}
    </PageLayoutContainer>
  )
}

export default HonorLayout