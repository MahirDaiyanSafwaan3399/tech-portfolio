import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'MAHIR | Impact Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: '#0A1930', // Navy
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background Gradients */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'rgba(36, 106, 243, 0.2)', filter: 'blur(100px)', borderRadius: '100%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'rgba(254, 201, 71, 0.1)', filter: 'blur(100px)', borderRadius: '100%' }} />

        {/* Content */}
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
             width: '240px',
             height: '240px',
             background: 'linear-gradient(135deg, #246AF3, #0A1930)',
             borderRadius: '60px',
             marginBottom: '50px',
             border: '4px solid rgba(255,255,255,0.1)',
             boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
            <span style={{ fontSize: 160, fontWeight: 900, color: '#FFFFFF', marginTop: -10 }}>M</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
             <div style={{ fontSize: 80, fontWeight: 900,  letterSpacing: '-2px', background: 'linear-gradient(to right, #fff, #94a3b8)', backgroundClip: 'text', color: 'transparent' }}>MAHIR</div>
             <div style={{ fontSize: 32, color: '#94A3B8', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase' }}>Impact Engineer</div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
