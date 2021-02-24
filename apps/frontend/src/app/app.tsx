import React from 'react';
import { Footer } from './footer/footer';
import { gql, useMutation } from '@apollo/client';
import { LeftNav } from './navigation/left-nav';
import AppStyles from './app.styles';
import styled from '@emotion/styled';
import { Header } from './header/header';
import { Input } from '@fm-x-learning/components';
import {
  createPatch,
  createPatchVariables,
} from '../__generated__/createPatch';

// To be moved to a routed component or similar.
const Main = styled.main`
  grid-area: main;
  box-shadow: -14px 2px 28px -8px rgba(0, 0, 0, 0.75);

  padding: 0.5rem;

  display: grid;

  grid-template-columns: repeat(6, max-content);
  grid-template-rows: repeat(4, max-content);
  grid-gap: 0.4rem; ;
`;

const MiddleSection = styled.div`
  grid-area: middle;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-areas: 'side main';

  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const CREATE_PATCH = gql`
  mutation createPatch($input: CreatePatchInput!) {
    createPatch(input: $input) {
      ok
      error
      patch {
        slug
        parts {
          commonGeneral {
            volume
            pan
            dryLevel
            varSend
            revSend
            polyphony
            keyAssign
            keyOnDlySync
            delayLength
            arpPlayOnly
            randomPan
            alternatePan
            scalingPan
            velocityLimitLower
            velocityLimitUpper
            noteLimitLower
            noteLimitUpper
            velocityOffset
            velocityDepth
          }
        }
      }
    }
  }
`;

export function App() {
  const [createPatchMutation, { data }] = useMutation<
    createPatch,
    createPatchVariables
  >(CREATE_PATCH, {
    onCompleted: (data: createPatch) => {
      console.log(data);
    },
  });

  // console.log(data);
  // React.useEffect(() => {
  //   createPatchMutation({
  //     variables: {
  //       input: {
  //         numOfParts: 1,
  //       },
  //     },
  //   });
  // }, [createPatchMutation]);

  return (
    <AppStyles>
      <Header />
      <MiddleSection>
        <LeftNav />
        <Main>
          <Input label="Volume" initialValue="100"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
          <Input label="Pan" initialValue="C"></Input>
        </Main>
      </MiddleSection>
      <Footer />
    </AppStyles>
  );
}

export default App;
