import NeedLoginWarn from '@src/components/common/exception/needLoginWarn';
import { ACCESS_TOKEN_KEY } from '@src/constants/token.constants';
import token from '@src/libs/token/token';
import Profile from '@src/pages/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  const isHaveToken = token.getToken(ACCESS_TOKEN_KEY);
  if (!isHaveToken) return <NeedLoginWarn background/>;
  return <Profile/>
}
