import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  colorVars,
  GlyphIcon,
  HStack,
  Segment,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { type JSX } from 'react';
import { type Unit } from '@/lib/enum';
import { getUnitIcon } from '@/lib/enum/utils';

type PersonalInfo = {
  name: string;
  googleEmail: string;
  phoneNumber: string;
};

type ApplicationInfo = {
  unit: Unit;
  introduction: string;
  motivation: string;
  expectedActivities: string;
  reasonToChoose: string;
};

interface ApplicationDetailInfoSectionProps {
  personalInfo: PersonalInfo;
  applicationInfo: ApplicationInfo;
  portfolio: string[];
}

export default function ApplicationDetailInfoSection(props: ApplicationDetailInfoSectionProps) {
  const { personalInfo, applicationInfo, portfolio } = props;

  return (
    <VStack
      spacing={spacingVars.moderate}
      className={s.base}
    >
      <InfoGroup
        title={'개인 정보'}
        content={[
          { label: '이름', value: personalInfo.name },
          { label: '구글 이메일', value: personalInfo.googleEmail },
          { label: '전화번호', value: personalInfo.phoneNumber },
        ]}
        spacing={spacingVars.petite}
      />
      <InfoGroup
        title={'지원 정보'}
        content={[
          {
            label: '유닛',
            value: applicationInfo.unit,
            render: () => (
              <Badge.Default
                size={BadgeSize.SMALL}
                label={applicationInfo.unit}
                leadingIcon={getUnitIcon(applicationInfo.unit)}
              />
            ),
          },
          { label: '자기소개', value: applicationInfo.introduction },
          { label: '지원 동기', value: applicationInfo.motivation },
          { label: '기대되는 활동', value: applicationInfo.expectedActivities },
          { label: '뽑아야하는 이유', value: applicationInfo.reasonToChoose },
        ]}
        spacing={spacingVars.moderate}
      />
      <VStack
        spacing={spacingVars.tiny}
        fullWidth
        align={StackAlign.START}
      >
        <Typo.Tiny
          weight={Weight.MEDIUM}
          color={colorVars.content.muted}
        >
          포트폴리오
        </Typo.Tiny>
        <HStack spacing={spacingVars.tiny}>
          {portfolio.map((item, index) => (
            <Segment
              key={index}
              label={item}
              value={item}
              leadingIcon={GlyphIcon.FOLDER}
            />
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
}

type InfoGroupContent = {
  label: string;
  value: string;
  render?: () => JSX.Element;
};

interface InfoGroupProps {
  title: string;
  content: InfoGroupContent[];
  spacing: string;
}

function InfoGroup(props: InfoGroupProps) {
  const { title, content, spacing } = props;

  return (
    <VStack
      spacing={spacingVars.tiny}
      fullWidth
      align={StackAlign.START}
    >
      <Typo.Tiny
        weight={Weight.MEDIUM}
        color={colorVars.content.muted}
      >
        {title}
      </Typo.Tiny>
      <VStack
        spacing={spacing}
        fullWidth
        align={StackAlign.START}
      >
        {content.map((item, index) => (
          <HStack
            spacing={spacingVars.micro}
            align={StackAlign.START}
            key={index}
          >
            <HStack
              justify={StackJustify.START}
              className={s.label}
              align={StackAlign.START}
            >
              <Typo.Micro weight={Weight.SEMIBOLD}>{item.label}</Typo.Micro>
            </HStack>
            <HStack
              fullWidth
              justify={StackJustify.START}
              align={StackAlign.START}
              className={s.content}
            >
              {item.render ? (
                item.render()
              ) : (
                <Typo.Micro
                  weight={Weight.MEDIUM}
                  color={colorVars.content.muted}
                >
                  {item.value}
                </Typo.Micro>
              )}
            </HStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
