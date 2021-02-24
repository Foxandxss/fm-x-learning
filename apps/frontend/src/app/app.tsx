import React from 'react';
import { Footer } from './footer/footer';
import { gql, useMutation, useQuery } from '@apollo/client';
import { LeftNav } from './navigation/left-nav';
import AppStyles from './app.styles';
import styled from '@emotion/styled';
import { Header } from './header/header';
import { Input } from '@fm-x-learning/components';
import {
  createPatch,
  createPatchVariables,
} from '../__generated__/createPatch';
import { patch, patchVariables } from '../__generated__/patch';

// To be moved to a routed component or similar.
const Main = styled.main`
  grid-area: main;
  box-shadow: -14px 2px 28px -8px rgba(0, 0, 0, 0.75);

  padding: 0.5rem;

  display: grid;

  grid-template-columns: repeat(6, max-content);
  grid-template-rows: repeat(4, max-content);
  grid-gap: 0.4rem;

  .empty-space {
    grid-area: 2 / 5 / 4 / 7;
  }
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

const GET_PATCH = gql`
  query patch($input: PatchInput!) {
    patch(input: $input) {
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
  const [createPatchMutation] = useMutation<createPatch, createPatchVariables>(
    CREATE_PATCH,
    {
      onCompleted: (data: createPatch) => {
        console.log(data);
      },
    }
  );

  const { data, loading, error } = useQuery<patch, patchVariables>(GET_PATCH, {
    variables: {
      input: {
        patchId: '603694c0c77591958c6e2208',
      },
    },
  });

  console.log(data);

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
          <Input label="Volume" initialValue="100" />
          <Input label="Pan" initialValue="C" />
          <Input label="Dry Level" initialValue="127" />
          <Input label="VarSend" initialValue="0" />
          <Input label="RevSend" initialValue="12" />
          <Input label="Part Output" initialValue="MainL&R" />
          <Input label="Mono/Poly" initialValue="Poly" />
          <Input label="Key Assign" initialValue="Multi" />
          <Input label="KeyOnDly Sync" initialValue="Off" />
          <Input label="Delay Length" initialValue="0" />
          <div className="empty-space"></div>
          <Input label="Arp Play Only" initialValue="Off" />
          <Input label="Random Pan" initialValue="0" />
          <Input label="Alternate Pan" initialValue="C" />
          <Input label="Saling Pan" initialValue="+0" />
          <Input label="Velocity Limit L" initialValue="1" />
          <Input label="Velocity Limit U" initialValue="127" />
          <Input label="Note Limit L" initialValue="C -2" />
          <Input label="Note Limit U" initialValue="G 8" />
          <Input label="Velocity Offset" initialValue="64" />
          <Input label="Velocity Depth" initialValue="64" />
        </Main>
      </MiddleSection>
      <Footer />
    </AppStyles>
  );
}

export default App;
