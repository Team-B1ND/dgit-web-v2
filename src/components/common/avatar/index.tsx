import { skeletonAnimtaion } from "@src/styles/skeletonAnimation";
import styled from "styled-components";


interface AvatarProps {
  url: string;
  size?: string;
}
const Avatar = ({
  url,
  size = "24px"
}: AvatarProps) => {
  return (
    <ProfileImage $profileImg={url} $size={size}/>
  )
}

export default Avatar


const ProfileImage = styled.div<{ $profileImg: string; $size: string }>`
  width: ${({ $size }) => $size};
  aspect-ratio: 1 / 1;
  background: ${({ $profileImg }) => `url(${$profileImg})`};
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${skeletonAnimtaion};
`;