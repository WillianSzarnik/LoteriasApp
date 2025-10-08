
import React from 'react';

interface IconProps {
    size?: number;
    color?: string;
}

export const SearchIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color}>
        {/* FIX: Corrected typo from strokeLineCap to strokeLinecap. */}
        <path strokeLinecap="round" strokeLineJoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const CloverIcon: React.FC<IconProps> = ({ size = 64, color = '#cbd5e1' /* slate-300 */ }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3a4 4 0 0 1 4 4c0 1.667 -.8 3 -2 4h-4c-1.2 0 -2 -.333 -2 -2s.8 -3 2 -4a4 4 0 0 1 4 -4z" />
        <path d="M12 21a4 4 0 0 1 -4 -4c0 -1.667 .8 -3 2 -4h4c1.2 0 2 .333 2 2s-.8 3 -2 4a4 4 0 0 1 -4 4z" />
        <path d="M3 12a4 4 0 0 1 4 -4c1.667 0 3 .8 4 2v4c0 1.2 -.333 2 -2 2s-3 -.8 -4 -2a4 4 0 0 1 -2 -4z" />
        <path d="M21 12a4 4 0 0 1 -4 4c-1.667 0 -3 -.8 -4 -2v-4c0 -1.2 .333 -2 2 -2s3 .8 4 2a4 4 0 0 1 2 4z" />
    </svg>
);

export const CloversIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M15.97 6.03a4 4 0 1 0 -7.94 .002a4 4 0 1 0 7.94 -.002" />
       <path d="M8.03 17.97a4 4 0 1 0 7.94 .002a4 4 0 1 0 -7.94 -.002" />
       <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
);

export const PrizeIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
       <path d="M16 3v4" />
       <path d="M8 3v4" />
       <path d="M4 11h16" />
       <path d="M11 15h1" />
       <path d="M12 15v3" />
    </svg>
);

export const MonthIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
       <path d="M16 3v4" />
       <path d="M8 3v4" />
       <path d="M4 11h16" />
       <path d="M7 14h.01" />
       <path d="M10 14h.01" />
       <path d="M13 14h.01" />
       <path d="M16 14h.01" />
       <path d="M7 17h.01" />
       <path d="M10 17h.01" />
       <path d="M13 17h.01" />
    </svg>
);

export const SoccerBallIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
       <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
       <path d="M12 7v-4" />
       <path d="M4.24 10.55l-3.24 -1.55" />
       <path d="M19.76 10.55l3.24 -1.55" />
       <path d="M9.24 16l-4.24 4" />
       <path d="M14.76 16l4.24 4" />
    </svg>
);

export const DollarSignIcon: React.FC<IconProps> = ({ size = 16, color = 'currentColor' }) => (
     // FIX: Corrected typo from strokeLineCap to strokeLinecap.
     <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
       <path d="M12 3v3m0 12v3" />
    </svg>
);

export const ArrowRightCircleIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor' }) => (
    // FIX: Corrected typo from strokeLineCap to strokeLinecap.
    <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLineJoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
       <path d="M16 12l-4 -4" />
       <path d="M16 12l-4 4" />
       <path d="M8 12h8" />
    </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color}>
    {/* FIX: Corrected typo from strokeLineCap to strokeLinecap. */}
    <path strokeLinecap="round" strokeLineJoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color}>
      {/* FIX: Corrected typo from strokeLineCap to strokeLinecap. */}
      <path strokeLinecap="round" strokeLineJoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);
