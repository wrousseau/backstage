/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { DomainEntity, RELATION_OWNED_BY } from '@backstage/catalog-model';
import { ItemCard, useRouteRef } from '@backstage/core';
import {
  EntityRefLinks,
  entityRouteParams,
  getEntityRelations,
} from '@backstage/plugin-catalog-react';
import React from 'react';
import { catalogEntityRouteRef } from '../../routes';

type DomainCardProps = {
  entity: DomainEntity;
};

export const DomainCard = ({ entity }: DomainCardProps) => {
  const ownedByRelations = getEntityRelations(entity, RELATION_OWNED_BY);
  const catalogEntityRoute = useRouteRef(catalogEntityRouteRef);

  return (
    <ItemCard
      title={entity.metadata.name}
      description={entity.metadata.description}
      tags={entity.metadata.tags}
      subtitle={
        <EntityRefLinks
          entityRefs={ownedByRelations}
          defaultKind="group"
          color="inherit"
        />
      }
      label="Explore"
      href={catalogEntityRoute(entityRouteParams(entity))}
    />
  );
};
