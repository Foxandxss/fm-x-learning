import styled from '@emotion/styled';

const Wrapper = styled.main`
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: max-content;
  grid-template-areas:
    'header'
    'middle'
    'footer';
  grid-row-gap: 1rem;

  margin-top: 5rem;

  background: linear-gradient(
    to right top,
    var(--screen-background-1),
    var(--screen-background-2)
  );
  color: white;
`;

export default Wrapper;
