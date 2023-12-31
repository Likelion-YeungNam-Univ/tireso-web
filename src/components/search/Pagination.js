import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  
`;

const Button = styled.button`
  width: 42px;
  height: 38px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 8px;
  margin: 0;
  background: white;
  color: black;
  font-size: 17px;
  font-family: 'IBM Plex Sans KR', sans-serif;
  margin-bottom: 150px;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #E5E1E1;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #ED6F63;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;