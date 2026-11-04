import { tornEdges, type TornEdgeName } from './tornEdges';

// Ragged paper seam between sections. Section edges hang from the top of their
// section and are filled with the colour of the section above; the hero edge
// sits on the bottom of the hero and tears into the white page below it.
export default function TornEdge({
  edge,
  fill = '#ffffff',
  shadow = 'rgba(0,0,0,0.14)',
}: {
  edge: TornEdgeName;
  fill?: string;
  shadow?: string;
}) {
  const { shadow: under, face } = tornEdges[edge];

  if (edge === 'hero') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        style={{
          position: 'absolute', left: 0, right: 0, bottom: -1, zIndex: 3,
          width: '100%', height: 110, display: 'block', pointerEvents: 'none',
          filter: 'drop-shadow(0 -3px 4px rgba(0,0,0,0.35))',
        }}
      >
        <path d={under} fill="#e6e3de" />
        <path d={face} fill={fill} />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      style={{
        position: 'absolute', left: 0, right: 0, top: -2,
        width: '100%', height: 66, overflow: 'hidden', display: 'block', pointerEvents: 'none',
      }}
    >
      <g style={{ filter: `drop-shadow(0 3px 3px ${shadow})` }}>
        <path d={under} fill="#e6e3de" />
        <path d={face} fill={fill} />
      </g>
    </svg>
  );
}
