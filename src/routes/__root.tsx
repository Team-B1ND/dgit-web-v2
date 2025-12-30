import { Outlet, createRootRoute } from '@tanstack/react-router'
import ThemeProvider from '@components/common/provider/themeProvider'
import Layout from '@src/components/common/layout'
import GlobalStyles from '@src/styles/globalStyles'
import QueryProvider from '@src/components/common/provider/queryProvider'
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <B1ndToastContainer autoClose={1000} limit={1} />
        <GlobalStyles />
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </QueryProvider>
  );
}
