import { DoorOpen } from '@b1nd/dds-web'
import { logout } from '@src/libs/logout/logout'
import { IconButtonContainer } from '@src/styles/iconButtonContainer'

const LogoutButton = () => {
  return (
    <IconButtonContainer onClick={logout}>
      <DoorOpen color="statusNegative" />
    </IconButtonContainer>
  )
}

export default LogoutButton