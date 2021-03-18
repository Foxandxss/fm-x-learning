import React from 'react';
import { Footer } from './footer/footer';
import { LeftNav } from './navigation/left-nav';
import AppStyles from './app.styles';
import styled from '@emotion/styled';
import { Header } from './header/header';
import { Input } from '@fm-x-learning/components';
import { useForm } from 'react-hook-form';

// To be moved to a routed component or similar.
const Main = styled.main`
  grid-area: main;
  box-shadow: -14px 2px 28px -8px rgba(0, 0, 0, 0.75);

  padding: 0.5rem;

  form {
    display: grid;

    grid-template-columns: repeat(6, max-content);
    grid-template-rows: repeat(4, max-content);
    grid-gap: 0.4rem;

    .empty-space {
      grid-area: 2 / 5 / 4 / 7;
    }
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

export function App() {
  const { getValues, register, reset } = useForm();

  // React.useEffect(() => {
  //   if (!data) return;
  //   const commonGeneral = data.patch.patch.parts[0].commonGeneral;
  //   reset({
  //     ...getValues(),
  //     ...commonGeneral,
  //   });
  // }, [data, getValues, reset]);

  return (
    <AppStyles>
      <Header />
      <MiddleSection>
        <LeftNav />
        <Main>
          <form>
            <Input label="Volume" name="volume" register={register} />
            <Input label="Pan" name="pan" register={register} />
            <Input label="Dry Level" name="dryLevel" register={register} />
            <Input label="VarSend" name="varSend" register={register} />
            <Input label="RevSend" name="revSend" register={register} />
            <Input label="Part Output" name="" register={register} />
            <Input label="Mono/Poly" name="polyphony" register={register} />
            <Input label="Key Assign" name="keyAssign" register={register} />
            <Input
              label="KeyOnDly Sync"
              name="keyOnDlySync"
              register={register}
            />
            <Input
              label="Delay Length"
              name="delayLength"
              register={register}
            />
            <div className="empty-space"></div>
            <Input
              label="Arp Play Only"
              name="arpPlayOnly"
              register={register}
            />
            <Input label="Random Pan" name="randomPan" register={register} />
            <Input
              label="Alternate Pan"
              name="alternatePan"
              register={register}
            />
            <Input label="Scaling Pan" name="scalingPan" register={register} />
            <Input
              label="Velocity Limit L"
              name="velocityLimitLower"
              register={register}
            />
            <Input
              label="Velocity Limit U"
              name="velocityLimitUpper"
              register={register}
            />
            <Input
              label="Note Limit L"
              name="noteLimitLower"
              register={register}
            />
            <Input
              label="Note Limit U"
              name="noteLimitUpper"
              register={register}
            />
            <Input
              label="Velocity Offset"
              name="velocityOffset"
              register={register}
            />
            <Input
              label="Velocity Depth"
              name="velocityDepth"
              register={register}
            />
          </form>
        </Main>
      </MiddleSection>
      <Footer />
    </AppStyles>
  );
}

export default App;
