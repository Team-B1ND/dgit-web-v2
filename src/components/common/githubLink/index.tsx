import styled from "styled-components";

interface GithubLinkProps {
  username: string;
}

const GithubLink = ({
  username
}: GithubLinkProps) => {
  return (
    <GithubLinkContainer href={`https://github.com/${username}`} target="_blank">{username}</GithubLinkContainer>
  )
}

export default GithubLink

const GithubLinkContainer = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.labelNormal};
`