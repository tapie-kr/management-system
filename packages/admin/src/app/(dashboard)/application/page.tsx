'use client';

import * as s from './page.css';

import {
  Badge,
  colorVars,
  DataTable,
  Filter,
  GlyphIcon,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { Status } from '@tapie-kr/dashboard-shared/lib/enum';
import { getStatusFilterGroup, getStatusIcon, getStatusTheme } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useState } from 'react';
import { path, pathMap } from '@/lib/pathmap';

interface DataType {
  name:   string;
  status: Status;
  from:   Temporal.PlainDateTime;
  to:     Temporal.PlainDateTime;
}

export default function ApplicationPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const data: DataType[] = [
    {
      name:   '2025년 TAPIE 2기',
      status: Status.SCHEDULED,
      from:   Temporal.PlainDateTime.from({
        year:   2025,
        month:  3,
        day:    27,
        hour:   6,
        minute: 17,
      }),
      to: Temporal.PlainDateTime.from({
        year:   2026,
        month:  3,
        day:    27,
        hour:   6,
        minute: 17,
      }),
    },
  ];

  const router = useRouter();

  return (
    <Page
      hasSearch
      title='신청폼'
      count={2}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <Filter filters={[getStatusFilterGroup()]} />
        <DataTable
          showIndex
          data={data}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.LOCK_OPEN,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'name',
              label:      '이름',
              width:      250,
              isSortable: true,
              cell:       (title, index) => {
                const handleNavigate = () => {
                  router.push(pathMap.resolvePath(path.application, index));
                };

                return (
                  <Typo.Petite
                    weight={Weight.MEDIUM}
                    className={s.title}
                    onClick={handleNavigate}
                  >
                    {title}
                  </Typo.Petite>
                );
              },
            },
            {
              key:        'status',
              label:      '상태',
              width:      120,
              isSortable: true,
              cell:       status => (
                <Badge.Default
                  label={status}
                  leadingIcon={getStatusIcon(status)}
                  theme={getStatusTheme(status)}
                />
              ),
            },
            {
              key:        'from',
              label:      '시작일',
              width:      150,
              isSortable: true,
              cell:       from => <Typo.Tiny color={colorVars.content.default}>{getDatetimeString(from, true)}</Typo.Tiny>,
            },
            {
              key:        'to',
              label:      '종료일',
              width:      150,
              isSortable: true,
              cell:       to => <Typo.Tiny color={colorVars.content.default}>{getDatetimeString(to, true)}</Typo.Tiny>,
            },
          ]}
        />
      </VStack>
    </Page>
  );
}
