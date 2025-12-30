import Skeleton from "@src/components/common/skeleton"
import styled from "styled-components"

const TableSkeleton = () => {
  return (
    <TableSkeletonContainer>
      {Array.from({ length: 20 }).map((_, idx) => <Skeleton key={idx} width="100%" height="48px" borderRadius="8px" />)}
    </TableSkeletonContainer>
  )
}

export default TableSkeleton

const TableSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  flex-grow: 1;
`