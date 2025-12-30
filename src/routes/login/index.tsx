import LoginLoading from '@src/pages/loginLoading';
import { createFileRoute } from '@tanstack/react-router'

type LoginParams = {
  redirect_page: string;
  code?: string;
  error?: string;
}
export const Route = createFileRoute("/login/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): LoginParams => {
    return {
      redirect_page: (search.redirect_page as string) || "",
      code: (search.code as string) || "",
      error: (search.error as string) || "",
    };
  },
});

function RouteComponent() {
  return <LoginLoading />
}
