import React from 'react';
import { client } from '@fm-x-learning/front-utils';
import { useAsync } from '@fm-x-learning/hooks';

async function bootstrapAppData() {
  return await client('createPatch');
}

const PatchContext = React.createContext<{ patch: any } | undefined>(undefined);

const PatchProvider = ({ children }) => {
  const {
    data: patch,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
  } = useAsync();

  React.useEffect(() => {
    const appDataPromise = bootstrapAppData();
    run(appDataPromise);
  }, [run]);

  const value = React.useMemo(() => ({ patch }), [patch]);

  // if (isLoading || isIdle) {
  //   return <div>Loading or idle</div>;
  // }

  // if (isError) {
  //   return <div>Error {error}</div>;
  // }

  if (isSuccess) {
    return (
      <PatchContext.Provider value={value}>{children}</PatchContext.Provider>
    );
  }

  throw new Error(`Unhandled status: ${status}`);
};

const usePatch = () => {
  const context = React.useContext(PatchContext);
  if (context === undefined) {
    throw new Error(`usePatch myst be used within a PatchProvider`);
  }
  return context;
};

export { PatchProvider, usePatch };
