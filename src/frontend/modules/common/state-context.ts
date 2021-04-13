import * as React from 'react';

export interface StateStore {
  theme: 'light' | 'dark';
}

export type ProvidedContext = {
  context: React.Context<StateStore>;
  provider: React.Provider<StateStore>;
};

export function stateContextProvider(): ProvidedContext {
  const StateContext = React.createContext<StateStore>({
    theme: 'light',
  });
  StateContext.displayName = 'StateContext';
  return {
    context: StateContext,
    provider: StateContext.Provider,
  };
}
