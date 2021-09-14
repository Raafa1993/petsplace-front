import React from 'react';
import Panel from '../Panel';
import Skeleton from '../Skeleton';

import { Container } from './styles';

const LoadingItemHome: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="bg-skeleton" />
        <span>
          <Skeleton className="image-skeleton" />
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </span>
      </Panel>
    </Container>
  );
}

export default LoadingItemHome;
