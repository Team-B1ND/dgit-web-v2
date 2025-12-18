import { PropsWithChildren } from "react"
import { DodamSegmentedButton } from "@b1nd/dds-web";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { PageLayoutContainer } from "@src/styles/pageContainer";

const RankLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate({ from: "/rank" })
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const section: {
    text: string;
    isAtv: boolean;
    value?: string;
  }[] = [
    { text: "통합", isAtv: pathname === "/rank/total", value: "/rank/total" },
    { text: "커밋", isAtv: pathname === "/rank/commit", value: "/rank/commit" },
    { text: "레포지토리", isAtv: pathname === "/rank/repository", value: "/rank/repository" },
    { text: "최장 스트릭", isAtv: pathname === "/rank/streak", value: "/rank/streak" },
  ];
  
  return (
    <PageLayoutContainer>
      <p>랭킹</p>
      <div style={{ minHeight: "48px"}}>
        <DodamSegmentedButton
          width={480}
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

export default RankLayout