import * as s from './style.css';

import {
  AspectRatio,
  Badge,
  BadgeSize,
  colorVars,
  HStack,
  type IconName,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface PortfolioCardProps {
  title: string;
  tags: {
    name:  string;
    icon?: IconName;
  }[];
  image:       string;
  catchphrase: string;
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const {
    title,
    tags,
    image,
    catchphrase,
  } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(pathMap.resolvePath(path.portfolio, 3));
  };

  return (
    <VStack
      spacing={spacingVars.base}
      className={s.base}
      align={StackAlign.START}
      onClick={handleClick}
    >
      <AspectRatio
        fullWidth
        fullHeight
        ratio={16 / 9}
        className={s.image}
      >
        <Image
          fullWidth
          fullHeight
          src={image}
          alt={title}
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{title}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{catchphrase}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        {tags.map((tag, index) => (
          <Badge.Default
            key={index}
            leadingIcon={tag.icon}
            label={tag.name}
            size={BadgeSize.SMALL}
          />
        ))}
      </HStack>
    </VStack>
  );
}
