'use client';

import * as s from './not-found.css';

import {
  Button,
  GlyphIcon,
  HStack,
  spacingVars,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <HStack
      className={s.base}
      fullWidth
      fullHeight
    >
      <VStack spacing={spacingVars.moderate}>
        <VStack spacing={spacingVars.micro}>
          <TAPIESymbol
            size={TAPIESymbolSize._32}
            hasLabel
          />
          <Typo.Jumbo weight={Weight.MEDIUM}>404 Not Found</Typo.Jumbo>
        </VStack>
        <Button.Default
          leadingIcon={GlyphIcon.ARROW_BACK}
          isFullWidth
          onClick={handleClick}
        >
          뒤로 돌아가기
        </Button.Default>
      </VStack>

      <VStack
        spacing={spacingVars.micro}
        className={s.footer}
      >
        <Typo.Micro>© 2025 TAPIE. All rights reserved.</Typo.Micro>
        <Typo.Mini>
          로그인 시도 및 접속 기록은 모두 수집되며 비정상적인 활동 감지시 TAPIE는 대응을 위해 해당
          기록을 활용할 수 있습니다.
        </Typo.Mini>
      </VStack>
    </HStack>
  );
}
