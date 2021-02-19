import styled from '@emotion/styled';

const AppStyles = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: min-content 1fr;
  grid-template-areas:
    'header header'
    'side main'
    'footer footer';
  grid-row-gap: 1rem;

  width: 100rem;
  margin: 0 auto;
  margin-top: 5rem;

  background: linear-gradient(
    to right top,
    var(--screen-background-1),
    var(--screen-background-2)
  );
  color: white;

  /* temp styles */
  min-height: 400px;
`;

export default AppStyles;
