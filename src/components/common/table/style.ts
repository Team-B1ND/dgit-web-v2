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
  cursor: pointer;
  `

export const TableCell = styled.div<{
  $width: string;
}>`
  border-top: 1px solid ${({ theme }) => theme.lineNeutral};
  display: flex;
  align-items: center;
  width: ${({ $width }) => $width === "FULL" ? "" : $width};
  min-width: ${({ $width }) => $width === "FULL" ? "96px" : $width};
  height: 100%;
  flex-grow: ${({ $width }) => $width === "FULL" ? "1" : ""};
  padding: 0 12px;
  white-space: nowrap;
`

export const BlankTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  color: ${({ theme }) => theme.labelAssistive};
`