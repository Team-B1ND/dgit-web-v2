import { Outlet, createRootRoute } from '@tanstack/react-router'
import ThemeProvider from '@components/common/provider/themeProvider'
import Layout from '@src/components/common/layout'
import GlobalStyles from '@src/styles/globalStyles'
import QueryProvider from '@src/components/common/provider/queryProvider'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <GlobalStyles/>
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </QueryProvider>
  )
}
