import { Badge, BadgeSize, GlyphIcon } from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import { getDateString } from '@/lib/utils/date';

interface DateBadgeProps {
  date:  Temporal.PlainDateTime;
  size?: BadgeSize;
}

export default function DateBadge(props: DateBadgeProps) {
  const { date, size = BadgeSize.LARGE } = props;

  return (
    <Badge.Default
      size={size}
      label={getDateString(date, false)}
      leadingIcon={GlyphIcon.TODAY}
    />
  );
}
