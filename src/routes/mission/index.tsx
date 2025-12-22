import NowDevelopingWarn from '@src/components/common/exception/nowDevelopingWarn'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mission/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NowDevelopingWarn background/>
}
