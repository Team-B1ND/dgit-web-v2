import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  color: ${({ theme }) => theme.labelAssistive};
`

export const TableRow = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.lineNeutral};
  cursor: pointer;
`

export const TableCell = styled.div<{
  $width: string;
}>`
  display: flex;
  align-items: center;
  width: ${({ $width }) => $width === "FULL" ? "" : $width};
  height: 100%;
  flex-grow: ${({ $width }) => $width === "FULL" ? "1" : ""};
  padding: 0 12px;
`