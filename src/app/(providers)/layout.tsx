'use client';
import {NextUIProvider} from '@nextui-org/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import React from 'react';
export const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const ProvidersLayout = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
