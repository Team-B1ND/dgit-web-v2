import { Outlet, createRootRoute } from '@tanstack/react-router'
import ThemeProvider from '@components/common/provider/themeProvider'
import Layout from '@src/components/common/layout'
import GlobalStyles from '@src/styles/globalStyles'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <GlobalStyles/>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  )
}
