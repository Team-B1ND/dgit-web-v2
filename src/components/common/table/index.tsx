import { ReactNode } from "react";
import * as S from "./style";

interface Props {
  keys: [string, string][];
  data: ReactNode[][];
  onRowClick?: (idx: number) => void;
}
/**
 * @description
 * 테이블 컴포넌트
 * - keys: [string, (string | "FULL")][]
 *    - 테이블 블록 정의
 *    - [`속성의 헤더 텍스트`, `해당 속성 블록 길이`][]
 * - data: ReactNode[][]
 *    - ReactNode이므로 string, number, element 등을 복합 사용 가능
 *    - 하나의 배열이 하나의 행으로 사용되므로, 배열 내부 값 순서가 중요하게 작용함
 * - onRowClick: (idx: number) => void;
 *    - 행 클릭시 해당 행의 idx값을 넘기는 onClick 함수
 */
const Table = ({ keys, data, onRowClick = () => {} }: Props) => {
  return (
    <S.TableContainer>
      <S.TableHeader>
        {keys.map((item) => (
          <S.TableCell
            $width={item[1]}
            key={item[0] + item[1]}
          >
            {item[0]}
          </S.TableCell>
        ))}
      </S.TableHeader>
      {data?.map((item, idx) => (
        <S.TableRow key={idx} onClick={() => onRowClick(idx)}>
          {item.map((item, idx) => (
            <S.TableCell
              $width={keys[idx][1]}
              key={idx}
            >
              {item}
            </S.TableCell>
          ))}
        </S.TableRow>
      ))}
    </S.TableContainer>
  );
};

export default Table;
