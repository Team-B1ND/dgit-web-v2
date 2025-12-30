import { DodamSegmentedButton } from "@b1nd/dds-web";
import { PageLayoutContainer } from "@src/styles/pageContainer"
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { PropsWithChildren } from "react"

const HonorLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate({ from: "/honor" })
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const section: {
    text: string;
    isAtv: boolean;
    value?: string;
  }[] = [
    { text: "주간 최고 커밋", isAtv: pathname === "/honor/weekly-commit", value: "/honor/weekly-commit" },
    { text: "주간 최고 인기 프로젝트", isAtv: pathname === "/honor/weekly-project", value: "/honor/weekly-project" },
  ];
  return (
    <PageLayoutContainer>
      <p>명예의 전당</p>
      <div style={{ minWidth: "48px" }}>
        <DodamSegmentedButton
          num={section.length}
          type="block"
          data={section}
          onClick={(text) => navigate({to: section.find(item => item.text === text)?.value})}
        />
      </div>
      {children}
    </PageLayoutContainer>
  )
}

export default HonorLayout