import { Outlet, createRootRoute } from '@tanstack/react-router'
import ThemeProvider from '@components/common/provider/themeProvider'
import Layout from '@src/components/common/layout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  )
}
