import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Az Souvenir homepage preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #02111B 0%, #5D737E 55%, #BFC0C0 100%)',
          color: '#FCFCFC',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          padding: '64px',
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -1 }}>Az Souvenir</div>
        <div style={{ fontSize: 42, marginTop: 18, opacity: 0.95 }}>Монгол бэлэг дурсгалын дэлгүүр</div>
        <div style={{ fontSize: 30, marginTop: 32, opacity: 0.8 }}>www.az-souvenir.com</div>
      </div>
    ),
    { ...size }
  );
}
