import { spacingVars } from '@tapie-kr/inspire-react';
import { AnimatedVStack } from '@/lib/animate';
import { pathMap } from '@/lib/pathmap/map';
import SidebarItem from '../item';
import SidebarItemGroup from '../item-group';

export default function SidebarContent() {
  return (
    <AnimatedVStack
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      fullWidth
      spacing={spacingVars.base}
    >
      <SidebarItem href={pathMap.home} />
      <SidebarItemGroup title={'수업'}>
        <SidebarItem href={pathMap.class} />
        <SidebarItem href={pathMap.homework} />
        <SidebarItem href={pathMap.attendance} />
      </SidebarItemGroup>
      <SidebarItemGroup title={'관리'}>
        <SidebarItem href={pathMap.member} />
        <SidebarItem href={pathMap.portfolio} />
        <SidebarItem href={pathMap.achievement} />
        <SidebarItem href={pathMap.application} />
      </SidebarItemGroup>
      <SidebarItemGroup title={'기타'}>
        <SidebarItem href={pathMap.announcement} />
        <SidebarItem href={pathMap.statistics} />
        <SidebarItem href={pathMap.metadata} />
      </SidebarItemGroup>
    </AnimatedVStack>
  );
}
