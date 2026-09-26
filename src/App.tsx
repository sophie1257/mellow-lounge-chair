import { useState } from 'react'
import sofa1 from './assets/sofa1.png'
import sofa2 from './assets/sofa2.png'
import chairCutout from './assets/chair-cutout.png'
import spaceLiving from './assets/space-living.png'
import spaceStudy from './assets/space-study.png'
import spaceBedroom from './assets/space-bedroom.png'

const colors = [
  { name: 'Deep Navy', hex: '#003D67', kr: '딥 네이비' },
  { name: 'Warm Gray', hex: '#A09890', kr: '웜 그레이' },
]

const features = [
  {
    num: '01',
    title: '곡선형 등받이',
    desc: '인체공학적 곡선이 척추를 자연스럽게 받쳐줍니다. 높은 등받이는 머리와 목까지 편안하게 지지하여 장시간 착석에도 피로감을 줄여줍니다.',
    icon: '◠',
  },
  {
    num: '02',
    title: '울 혼방 패브릭',
    desc: '울과 폴리에스터를 혼방한 스무스 패브릭은 매끄럽고 균일한 표면이 공간에 절제된 고급스러움을 더합니다. 필링과 색 바램에 강하여 오래도록 처음의 품질을 유지합니다.',
    icon: '○',
  },
  {
    num: '03',
    title: '슬림 파우더코팅 프레임',
    desc: '분체도장 처리된 슬림 스틸 프레임은 구조적 안정성과 시각적 가벼움을 동시에 달성합니다. 클린한 라인이 어떤 인테리어에도 자연스럽게 어울립니다.',
    icon: '△',
  },
]

const spaces = [
  {
    label: '거실',
    img: spaceLiving,
    desc: '넓은 거실의 중심에서 포컬 포인트가 됩니다.',
  },
  {
    label: '서재',
    img: spaceStudy,
    desc: '독서와 사색의 공간에서 집중력을 높여줍니다.',
  },
  {
    label: '침실',
    img: spaceBedroom,
    desc: '침실 한켠에 두어 아침과 저녁의 여유를 만듭니다.',
  },
]

const specs = [
  { label: '소재', value: '울 혼방 스무스 패브릭 (울 60% / 폴리에스터 40%), 분체도장 스틸 프레임' },
  { label: '색상', value: 'Deep Navy / Warm Gray' },
  { label: '전체 너비', value: '760 mm' },
  { label: '전체 깊이', value: '700 mm' },
  { label: '전체 높이', value: '980 mm' },
  { label: '좌면 높이', value: '430 mm' },
  { label: '좌면 깊이', value: '520 mm' },
  { label: '등받이 높이', value: '580 mm' },
  { label: '최대 하중', value: '120kg' },
  { label: '제조국', value: '[정보 확인 후 입력]' },
  { label: '인증', value: '[정보 확인 후 입력]' },
]

const deliveryItems = [
  { label: '배송 방법', value: '화물 배송 (2인 설치 포함)', checked: true },
  { label: '배송 기간', value: '결제 후 7–14 영업일', checked: true },
  { label: '배송비', value: '[정보 확인 후 입력]', checked: false },
  { label: '도서산간 추가 배송비', value: '[정보 확인 후 입력]', checked: false },
  { label: '반품 조건', value: '[정보 확인 후 입력]', checked: false },
  { label: '품질 보증', value: '[정보 확인 후 입력]', checked: false },
]

const careItems = [
  '부드러운 건식 천으로 표면을 가볍게 털어내어 먼지를 제거하세요.',
  '오염 시 즉시 마른 천으로 두드려 흡수시키세요. 문지르면 오염이 퍼질 수 있습니다.',
  '세제 사용 시 중성 세제를 소량 희석하여 테스트 후 사용하세요.',
  '직사광선이 닿는 곳에 장기간 노출하면 색이 바랄 수 있습니다.',
  '스팀 클리너 또는 물 세척은 삼가세요.',
]

export default function App() {
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeSpec, setActiveSpec] = useState<number | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div style={{ fontFamily: "'Noto Sans KR', sans-serif", backgroundColor: '#F5F1E9', color: '#343334' }}>

      {/* ── NAV ── */}
      <header style={{ borderBottom: '1px solid #B79A63' }} className="sticky top-0 z-50 bg-[#F5F1E9] bg-opacity-95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <span style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', letterSpacing: '0.3em', fontSize: '1.1rem', fontWeight: 600 }}>
              MELLOW
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs" style={{ color: '#343334', letterSpacing: '0.1em' }}>
            <a href="#features" className="hover:opacity-60 transition-opacity">FEATURES</a>
            <a href="#colors" className="hover:opacity-60 transition-opacity">COLORS</a>
            <a href="#specs" className="hover:opacity-60 transition-opacity">SPECS</a>
          </nav>
          <div className="text-xs" style={{ color: '#B79A63', letterSpacing: '0.05em' }}>
            가구 브랜드 포트폴리오
          </div>
        </div>
      </header>

      {/* ── 01 MAIN VISUAL ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left: image */}
          <div className="relative overflow-hidden" style={{ backgroundColor: '#E3DACB', minHeight: '70vw', maxHeight: '100vh' }}>
            <img
              src={sofa1}
              alt="MELLOW LOUNGE CHAIR — Powder Blue"
              className="w-full h-full object-cover object-center"
              style={{ mixBlendMode: 'multiply' }}
            />
            {/* Gold corner line */}
            <div className="absolute top-8 left-8 w-12 h-12" style={{ borderTop: '1px solid #B79A63', borderLeft: '1px solid #B79A63' }} />
            <div className="absolute bottom-8 right-8 w-12 h-12" style={{ borderBottom: '1px solid #B79A63', borderRight: '1px solid #B79A63' }} />
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-end px-10 md:px-16 py-20 md:py-24">
            <div className="mb-6" style={{ borderTop: '1px solid #B79A63', paddingTop: '1.5rem' }}>
              <p className="text-xs tracking-widest mb-1" style={{ color: '#B79A63' }}>MELLOW FURNITURE</p>
              <p className="text-xs tracking-widest" style={{ color: '#AABCCD' }}>LOUNGE CHAIR No. 01</p>
            </div>

            <h1
              style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', lineHeight: 1.15, fontWeight: 500 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-8"
            >
              MELLOW<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>LOUNGE</em><br />
              CHAIR
            </h1>

            <p className="text-base md:text-lg mb-10 leading-relaxed" style={{ color: '#343334', maxWidth: '28rem' }}>
              하루의 쉼이 머무는<br />가장 편안한 자리
            </p>

            <div className="flex items-center gap-4 mb-12">
              <div className="w-5 h-5 rounded-full border-2" style={{ backgroundColor: '#003D67', borderColor: '#4B2D29' }} />
              <span className="text-sm" style={{ color: '#4B2D29' }}>Deep Navy</span>
              <span className="text-xs" style={{ color: '#B79A63' }}>+ 1 color available</span>
            </div>

            {/* Price */}
            <div className="mb-6" style={{ borderTop: '1px solid #E3DACB', paddingTop: '1.5rem' }}>
              <div className="flex items-baseline gap-3">
                <span style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 600, fontSize: '1.75rem', letterSpacing: '-0.01em' }}>
                  1,290,000원
                </span>
                <span className="text-xs" style={{ color: '#B79A63' }}>VAT 포함</span>
              </div>
            </div>

            {/* Color selector */}
            <div className="mb-5">
              <p className="text-xs mb-3 tracking-wider" style={{ color: '#B79A63' }}>
                컬러 — <span style={{ color: '#4B2D29' }}>{colors[selectedColor].kr}</span>
              </p>
              <div className="flex gap-2">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className="w-7 h-7 rounded-full transition-all"
                    style={{
                      backgroundColor: c.hex,
                      outline: selectedColor === i ? `2px solid #4B2D29` : '2px solid transparent',
                      outlineOffset: '2px',
                    }}
                    title={c.kr}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs mb-3 tracking-wider" style={{ color: '#B79A63' }}>수량</p>
              <div className="flex items-center gap-0" style={{ border: '1px solid #E3DACB', width: 'fit-content' }}>
                <button
                  className="w-9 h-9 flex items-center justify-center transition-colors hover:bg-[#E3DACB] text-lg"
                  style={{ color: '#4B2D29' }}
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >−</button>
                <span className="w-10 text-center text-sm" style={{ color: '#4B2D29' }}>{quantity}</span>
                <button
                  className="w-9 h-9 flex items-center justify-center transition-colors hover:bg-[#E3DACB] text-lg"
                  style={{ color: '#4B2D29' }}
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button
                  className="flex-1 py-3 text-sm tracking-widest transition-all hover:opacity-80"
                  style={{ backgroundColor: '#4B2D29', color: '#F5F1E9', letterSpacing: '0.12em' }}
                  onClick={() => alert('구매하기 — 포트폴리오 시안')}
                >
                  바로 구매
                </button>
                <button
                  className="flex-1 py-3 text-sm tracking-widest transition-all"
                  style={{
                    backgroundColor: addedToCart ? '#AABCCD' : 'transparent',
                    border: `1px solid ${addedToCart ? '#AABCCD' : '#4B2D29'}`,
                    color: addedToCart ? '#F5F1E9' : '#4B2D29',
                    letterSpacing: '0.12em',
                    transition: 'all 0.3s',
                  }}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? '✓ 담겼습니다' : '장바구니'}
                </button>
              </div>
              <button
                className="w-full py-3 text-sm tracking-widest transition-all hover:bg-[#E3DACB]"
                style={{ border: '1px solid #E3DACB', color: '#343334', letterSpacing: '0.12em' }}
              >
                쇼룸 문의
              </button>
            </div>
          </div>
        </div>

        {/* Section number */}
        <div className="absolute bottom-8 left-8 hidden md:block" style={{ color: '#B79A63', fontSize: '0.65rem', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}>
          01 — MAIN VISUAL
        </div>
      </section>

      {/* ── 02 USAGE SCENE ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#E3DACB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 md:col-start-1">
              <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>02 — USAGE SCENE</p>
              <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500, lineHeight: 1.3 }}
                className="text-3xl md:text-4xl mb-6">
                일상의 쉼을<br />담는 의자
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#343334' }}>
                책을 읽거나, 음악을 듣거나, 아무것도 하지 않아도 좋은 순간.<br />
                멜로우 라운지체어는 그 모든 쉼의 자리가 됩니다.
              </p>
              <div className="w-8" style={{ borderTop: '1px solid #B79A63' }} />
            </div>
            <div className="md:col-span-7 md:col-start-6 relative">
              <img
                src={sofa2}
                alt="가을빛 창가에서 휴식 중인 MELLOW LOUNGE CHAIR"
                className="w-full object-cover"
                style={{ maxHeight: '75vh', objectPosition: 'center 30%', backgroundColor: '#E3DACB' }}
              />
              <div
                className="absolute -bottom-4 -left-4 px-5 py-4 hidden md:block"
                style={{ backgroundColor: '#F5F1E9', borderTop: '1px solid #B79A63' }}
              >
                <p className="text-xs" style={{ color: '#4B2D29', letterSpacing: '0.05em' }}>WOOL BLEND FABRIC</p>
                <p className="text-xs mt-1" style={{ color: '#B79A63' }}>Deep Navy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECIAL POINT BANNER ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '520px', backgroundColor: '#E3DACB' }}>
        <img
          src={sofa1}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%', opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #E3DACB 30%, transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest mb-6" style={{ color: '#B79A63' }}>03 — KEY FEATURES</p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', lineHeight: 1.1, fontWeight: 300 }}
                className="text-5xl md:text-6xl mb-2">
                special
              </p>
              <p style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', lineHeight: 1.1, fontWeight: 600 }}
                className="text-5xl md:text-6xl">
                point
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(245,241,233,0.75)',
                backdropFilter: 'blur(12px)',
                borderTop: '1px solid rgba(183,154,99,0.4)',
                borderBottom: '1px solid rgba(183,154,99,0.4)',
              }}
            >
              {[
                { num: '01', sub: '인체공학적 설계', title: '곡선형 하이백 등받이' },
                { num: '02', sub: '프리미엄 소재', title: '울 혼방 스무스 패브릭' },
                { num: '03', sub: '구조적 안정성', title: '슬림 파우더코팅 스틸 프레임' },
                { num: '04', sub: '색상 선택', title: '딥 네이비 / 웜 그레이 2종' },
              ].map((p) => (
                <div key={p.num} className="flex items-center gap-5 px-6 py-5" style={{ borderBottom: '1px solid rgba(183,154,99,0.2)' }}>
                  <div className="flex-shrink-0 text-right" style={{ minWidth: '3rem' }}>
                    <p className="text-xs" style={{ color: '#B79A63', letterSpacing: '0.1em' }}>point</p>
                    <p style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontSize: '1.5rem', fontWeight: 600, lineHeight: 1 }}>{p.num}</p>
                  </div>
                  <div style={{ width: '1px', height: '2rem', backgroundColor: '#B79A63', opacity: 0.4, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs mb-1" style={{ color: '#B79A63', letterSpacing: '0.08em' }}>{p.sub}</p>
                    <p style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }} className="text-base md:text-lg">{p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── KEY FEATURES DETAIL ── */}
      <section id="features" className="py-24 md:py-36" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-px" style={{ borderTop: '1px solid #B79A63' }}>
            {features.map((f) => (
              <div key={f.num} className="pt-8 pb-10 pr-8 transition-all hover:bg-[#E3DACB] group cursor-default">
                <p className="text-xs mb-6" style={{ color: '#B79A63', letterSpacing: '0.2em' }}>{f.num}</p>
                <div className="text-2xl mb-5 group-hover:text-[#4B2D29] transition-colors" style={{ color: '#AABCCD' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
                  className="text-xl md:text-2xl mb-4">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#343334', lineHeight: 1.9 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 DESIGN STORY ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#4B2D29', color: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest mb-6" style={{ color: '#B79A63' }}>04 — DESIGN STORY</p>
              <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 400, lineHeight: 1.4, color: '#F5F1E9' }}
                className="text-3xl md:text-4xl lg:text-5xl mb-8">
                부드러운 곡선이<br />공간을 완성합니다
              </h2>
              <div className="w-8 mb-8" style={{ borderTop: '1px solid #B79A63' }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#E3DACB', lineHeight: 2 }}>
                멜로우 라운지체어의 등받이 곡선은 단순히 인체공학적 기능을 넘어,
                공간 전체의 인상을 부드럽게 바꿉니다.
                딥네이비와 웜그레이 컬러는 부드러운 패브릭 소재가 더해져
                공간 전체에 포인트를 주면서도 따뜻하고 성숙한 분위기를 만들어냅니다.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#E3DACB', lineHeight: 2 }}>
                슬림한 스틸 프레임은 의자의 볼륨감을 강조하면서도
                시각적 무게감을 최소화하여, 공간이 협소한 경우에도
                답답함 없이 배치할 수 있습니다.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16" style={{ borderTop: '1px solid #B79A63', borderLeft: '1px solid #B79A63' }} />
              <div className="h-80 md:h-[520px] overflow-hidden" style={{ backgroundColor: '#3a2420' }}>
                <img
                  src={sofa1}
                  alt="MELLOW 라운지체어 클로즈업"
                  className="w-full h-full object-cover opacity-80"
                  style={{ objectPosition: 'center 55%', transform: 'scale(1.5)', transformOrigin: 'center 60%' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16" style={{ borderBottom: '1px solid #B79A63', borderRight: '1px solid #B79A63' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 FABRIC DETAIL ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>05 — FABRIC DETAIL</p>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-16">
            <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500, lineHeight: 1.3 }}
              className="text-3xl md:text-4xl">
              손끝에서 느껴지는<br />울 패브릭의 온기
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#343334', lineHeight: 1.9 }}>
              울과 폴리에스터를 혼방한 스무스 패브릭은 매끄럽고 균일한
              표면이 시각적 절제미를 만들어냅니다. 만져보면 부드럽고 따뜻하며,
              어떤 공간에도 자연스럽게 어우러지는 고급스러운 질감을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* 01 — sofa2(낙엽): 왼쪽 의자 등받이 패브릭 정면 */}
            <div className="overflow-hidden" style={{ backgroundColor: '#E3DACB', aspectRatio: '3/4' }}>
              <img
                src={sofa2}
                alt="등받이 패브릭 질감"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: '28% 52%', transform: 'scale(3.2)', transformOrigin: '28% 52%' }}
              />
            </div>
            {/* 02 — sofa2(낙엽): 오른쪽 그레이 의자 몸통 확대 */}
            <div className="overflow-hidden" style={{ backgroundColor: '#E3DACB', aspectRatio: '3/4' }}>
              <img
                src={sofa2}
                alt="그레이 의자 몸통 패브릭 질감"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: '68% 42%', transform: 'scale(3.2)', transformOrigin: '68% 42%' }}
              />
            </div>
            {/* 03 — sofa1(도로): 왼쪽 의자 측면·팔걸이 패브릭 */}
            <div className="overflow-hidden" style={{ backgroundColor: '#E3DACB', aspectRatio: '3/4' }}>
              <img
                src={sofa1}
                alt="팔걸이 패브릭 질감"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: '22% 62%', transform: 'scale(3.0)', transformOrigin: '22% 62%' }}
              />
            </div>
            {/* 04 — sofa1(도로): 오른쪽 의자 등받이 곡선 패브릭 */}
            <div className="overflow-hidden" style={{ backgroundColor: '#E3DACB', aspectRatio: '3/4' }}>
              <img
                src={sofa1}
                alt="등받이 곡선 패브릭 질감"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: '58% 50%', transform: 'scale(2.8)', transformOrigin: '58% 50%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 SEATING STRUCTURE ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#E3DACB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-12" style={{ color: '#B79A63' }}>06 — SEATING STRUCTURE</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                part: '등받이',
                title: 'High-Back Support',
                desc: '980mm 높이의 등받이는 머리부터 허리까지 전체를 감싸듯 지지합니다. 상단으로 갈수록 좁아지는 곡선 실루엣이 앉는 사람을 자연스럽게 포근히 감싸줍니다.',
              },
              {
                part: '좌방석',
                title: 'Deep Cushion Seat',
                desc: '520mm 깊이의 넉넉한 좌방석은 앉는 면적을 충분히 확보합니다. 쿠션 내부는 고밀도 폼으로 채워져 오랜 사용 후에도 형태를 유지합니다.',
              },
              {
                part: '프레임',
                title: 'Slim Steel Frame',
                desc: '분체도장 처리된 슬림 스틸 프레임은 가늘지만 단단합니다. 최대 하중 120kg을 지지하며, 바닥 스크래치 방지를 위한 펠트 패드가 기본 부착됩니다.',
              },
            ].map((s, i) => (
              <div key={i} className="border-t pt-8" style={{ borderColor: '#B79A63' }}>
                <p className="text-xs tracking-widest mb-2" style={{ color: '#B79A63' }}>{String(i + 1).padStart(2, '0')}</p>
                <p className="text-xs mb-3 tracking-wider" style={{ color: '#AABCCD' }}>{s.part}</p>
                <h3 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
                  className="text-xl mb-4">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#343334', lineHeight: 1.9 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Structure diagram — CSS drawn */}
          <div className="mt-20 flex justify-center">
            <div className="relative" style={{ width: '280px', height: '320px' }}>
              {/* Simple line diagram */}
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Back */}
                <path d="M80 40 Q60 180 65 240 L215 240 Q220 180 200 40 Q160 20 140 18 Q120 20 80 40Z" fill="#AABCCD" fillOpacity="0.25" stroke="#AABCCD" strokeWidth="1.5"/>
                {/* Seat */}
                <rect x="60" y="235" width="160" height="40" rx="4" fill="#AABCCD" fillOpacity="0.4" stroke="#4B2D29" strokeWidth="1"/>
                {/* Left leg */}
                <line x1="85" y1="275" x2="80" y2="315" stroke="#4B2D29" strokeWidth="2"/>
                {/* Right leg */}
                <line x1="195" y1="275" x2="200" y2="315" stroke="#4B2D29" strokeWidth="2"/>
                {/* Annotations */}
                <line x1="230" y1="40" x2="230" y2="240" stroke="#B79A63" strokeWidth="0.75"/>
                <line x1="225" y1="40" x2="235" y2="40" stroke="#B79A63" strokeWidth="0.75"/>
                <line x1="225" y1="240" x2="235" y2="240" stroke="#B79A63" strokeWidth="0.75"/>
                <text x="245" y="145" fill="#B79A63" fontSize="9" fontFamily="monospace">980mm</text>
                <line x1="60" y1="295" x2="220" y2="295" stroke="#B79A63" strokeWidth="0.75" strokeDasharray="4 4"/>
                <text x="100" y="310" fill="#B79A63" fontSize="9" fontFamily="monospace">760mm</text>
              </svg>
              <p className="text-center text-xs mt-2" style={{ color: '#B79A63', letterSpacing: '0.1em' }}>정면 도식 (참고용)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 SPACE PRESENTATION ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>07 — SPACE PRESENTATION</p>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
            className="text-3xl md:text-4xl mb-16">
            어떤 공간에도<br />자연스럽게
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {spaces.map((s, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden mb-4" style={{ backgroundColor: '#E3DACB', aspectRatio: '4/5' }}>
                  <img
                    src={s.img}
                    alt={`${s.label} 속 MELLOW LOUNGE CHAIR`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-xs" style={{ color: '#B79A63' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }} className="text-lg">
                    {s.label}
                  </h3>
                </div>
                <p className="mt-2 text-sm" style={{ color: '#343334' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 COLOR OPTIONS ── */}
      <section id="colors" className="py-24 md:py-36" style={{ backgroundColor: '#E3DACB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>08 — COLOR OPTIONS</p>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
            className="text-3xl md:text-4xl mb-12">
            두 가지 컬러
          </h2>

          <div className="flex gap-4 mb-12">
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className="flex items-center gap-3 px-5 py-3 transition-all text-sm"
                style={{
                  backgroundColor: selectedColor === i ? '#4B2D29' : 'transparent',
                  color: selectedColor === i ? '#F5F1E9' : '#4B2D29',
                  border: `1px solid ${selectedColor === i ? '#4B2D29' : '#B79A63'}`,
                }}
              >
                <span className="w-4 h-4 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: c.hex }} />
                {c.kr}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {colors.map((c, i) => (
              <div
                key={i}
                className="relative overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ outline: selectedColor === i ? `2px solid #4B2D29` : 'none', outlineOffset: '4px' }}
                onClick={() => setSelectedColor(i)}
              >
                <div className="aspect-[3/4]" style={{ backgroundColor: c.hex }}>
                  <div className="w-full h-full flex items-end p-6"
                    style={{ background: `linear-gradient(to top, rgba(75,45,41,0.3) 0%, transparent 60%)` }}>
                    {selectedColor === i && (
                      <span className="text-xs tracking-widest" style={{ color: '#F5F1E9' }}>선택됨</span>
                    )}
                  </div>
                </div>
                <div className="pt-4 pb-2">
                  <p style={{ color: '#4B2D29', fontWeight: 500 }} className="text-sm">{c.kr}</p>
                  <p className="text-xs mt-1" style={{ color: '#B79A63' }}>{c.name}</p>
                  <p className="text-xs mt-1 font-mono" style={{ color: '#343334', opacity: 0.6 }}>{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#003D67', minHeight: '420px' }}>
        {/* Chair image — right side with gradient fade */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src={sofa1}
            alt=""
            aria-hidden="true"
            className="absolute h-full object-cover object-center"
            style={{ right: 0, width: '55%', objectPosition: '30% center' }}
          />
          {/* Gradient: navy on left, transparent on right */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #003D67 38%, #003D67cc 55%, #003D6799 68%, transparent 85%)' }}
          />
          {/* Top & bottom fade */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, #003D67 0%, transparent 15%, transparent 85%, #003D67 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-lg">
            <p className="text-xs tracking-widest mb-4" style={{ color: '#AABCCD', letterSpacing: '0.25em' }}>LIMITED OFFER</p>
            <h2
              style={{ fontFamily: "'Noto Serif KR', serif", color: '#F5F1E9', fontWeight: 400, lineHeight: 1.3 }}
              className="text-3xl md:text-4xl mb-4"
            >
              신규 출시 기념<br />
              <em style={{ fontStyle: 'italic', color: '#AABCCD' }}>얼리버드 특가</em>
            </h2>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-sm line-through" style={{ color: '#AABCCD', opacity: 0.6 }}>1,290,000원</span>
              <span style={{ fontFamily: "'Noto Serif KR', serif", color: '#F5F1E9', fontWeight: 600, fontSize: '1.5rem' }}>1,090,000원</span>
              <span className="text-xs px-2 py-0.5" style={{ backgroundColor: '#B79A63', color: '#F5F1E9' }}>15% OFF</span>
            </div>
            <p className="text-xs mb-8" style={{ color: '#AABCCD', opacity: 0.7 }}>~ 2026. 10. 31. 까지 · 수량 한정</p>
            <button
              className="px-8 py-3 text-sm tracking-widest transition-all hover:bg-[#F5F1E9] hover:text-[#003D67]"
              style={{ border: '1px solid #F5F1E9', color: '#F5F1E9', letterSpacing: '0.15em' }}
              onClick={() => alert('기획전 버튼 — 포트폴리오 시안')}
            >
              기획전 바로가기
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: '#B79A63', opacity: 0.4 }} />
      </section>

      {/* ── 09 SIZE GUIDE ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>09 — SIZE GUIDE</p>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
            className="text-3xl md:text-4xl mb-16">
            사이즈 가이드
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Front view diagram */}
            <div>
              <p className="text-xs mb-6 tracking-wider" style={{ color: '#B79A63' }}>FRONT VIEW</p>
              <div className="flex justify-center" style={{ backgroundColor: '#E3DACB', padding: '2rem' }}>
                <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '260px' }}>
                  {/* Chair outline */}
                  <path d="M85 35 Q65 175 70 240 L230 240 Q235 175 215 35 Q175 15 150 13 Q125 15 85 35Z" fill="#AABCCD" fillOpacity="0.3" stroke="#4B2D29" strokeWidth="1.5"/>
                  <rect x="65" y="235" width="170" height="45" rx="3" fill="#AABCCD" fillOpacity="0.5" stroke="#4B2D29" strokeWidth="1.5"/>
                  <line x1="90" y1="280" x2="85" y2="340" stroke="#4B2D29" strokeWidth="2"/>
                  <line x1="210" y1="280" x2="215" y2="340" stroke="#4B2D29" strokeWidth="2"/>

                  {/* Width dimension */}
                  <line x1="65" y1="355" x2="235" y2="355" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="65" y1="350" x2="65" y2="360" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="235" y1="350" x2="235" y2="360" stroke="#B79A63" strokeWidth="1"/>
                  <text x="128" y="372" fill="#B79A63" fontSize="10" fontFamily="monospace">760mm</text>

                  {/* Height dimension */}
                  <line x1="250" y1="35" x2="250" y2="280" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="245" y1="35" x2="255" y2="35" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="245" y1="280" x2="255" y2="280" stroke="#B79A63" strokeWidth="1"/>
                  <text x="260" y="162" fill="#B79A63" fontSize="10" fontFamily="monospace">980mm</text>

                  {/* Seat height */}
                  <line x1="40" y1="235" x2="40" y2="280" stroke="#B79A63" strokeWidth="1" strokeDasharray="3 3"/>
                  <text x="2" y="260" fill="#B79A63" fontSize="9" fontFamily="monospace">430</text>
                </svg>
              </div>
            </div>

            {/* Side view diagram */}
            <div>
              <p className="text-xs mb-6 tracking-wider" style={{ color: '#B79A63' }}>SIDE VIEW</p>
              <div className="flex justify-center" style={{ backgroundColor: '#E3DACB', padding: '2rem' }}>
                <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '260px' }}>
                  {/* Side silhouette */}
                  <path d="M120 35 Q95 100 90 200 L200 200 Q210 150 210 35 Q175 15 150 13 Q135 15 120 35Z" fill="#AABCCD" fillOpacity="0.3" stroke="#4B2D29" strokeWidth="1.5"/>
                  <rect x="80" y="195" width="140" height="45" rx="3" fill="#AABCCD" fillOpacity="0.5" stroke="#4B2D29" strokeWidth="1.5"/>
                  <line x1="100" y1="240" x2="95" y2="300" stroke="#4B2D29" strokeWidth="2"/>
                  <line x1="200" y1="240" x2="205" y2="300" stroke="#4B2D29" strokeWidth="2"/>

                  {/* Depth dimension */}
                  <line x1="80" y1="320" x2="220" y2="320" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="80" y1="315" x2="80" y2="325" stroke="#B79A63" strokeWidth="1"/>
                  <line x1="220" y1="315" x2="220" y2="325" stroke="#B79A63" strokeWidth="1"/>
                  <text x="120" y="337" fill="#B79A63" fontSize="10" fontFamily="monospace">700mm</text>

                  {/* Seat depth */}
                  <line x1="80" y1="345" x2="195" y2="345" stroke="#B79A63" strokeWidth="1" strokeDasharray="3 3"/>
                  <text x="95" y="358" fill="#B79A63" fontSize="9" fontFamily="monospace">520mm (seat)</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 PRODUCT INFO ── */}
      <section id="specs" className="py-24 md:py-36" style={{ backgroundColor: '#E3DACB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-4" style={{ color: '#B79A63' }}>10 — PRODUCT INFO</p>
          <h2 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
            className="text-3xl md:text-4xl mb-12">
            상품 정보
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                {specs.map((s, i) => (
                  <tr
                    key={i}
                    className="cursor-pointer transition-colors hover:bg-[#F5F1E9]"
                    style={{ borderBottom: '1px solid #B79A63' }}
                    onClick={() => setActiveSpec(activeSpec === i ? null : i)}
                  >
                    <td className="py-4 pr-8 font-medium whitespace-nowrap" style={{ color: '#4B2D29', width: '35%', minWidth: '120px' }}>
                      {s.label}
                    </td>
                    <td className="py-4" style={{ color: s.value.includes('[정보') ? '#B79A63' : '#343334' }}>
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 11 DELIVERY & CARE ── */}
      <section className="py-24 md:py-36" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-widest mb-12" style={{ color: '#B79A63' }}>11 — DELIVERY & CARE</p>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Delivery */}
            <div>
              <h3 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
                className="text-2xl md:text-3xl mb-8">
                배송 안내
              </h3>
              <div className="space-y-0">
                {deliveryItems.map((d, i) => (
                  <div key={i} className="flex items-start gap-4 py-4" style={{ borderBottom: '1px solid #E3DACB' }}>
                    <span className="mt-0.5 flex-shrink-0" style={{ color: d.checked ? '#AABCCD' : '#B79A63' }}>
                      {d.checked ? '✓' : '—'}
                    </span>
                    <div className="flex-1 flex flex-wrap justify-between gap-2">
                      <span className="text-sm font-medium" style={{ color: '#4B2D29' }}>{d.label}</span>
                      <span className="text-sm" style={{ color: d.value.includes('[정보') ? '#B79A63' : '#343334' }}>
                        {d.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Care */}
            <div>
              <h3 style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500 }}
                className="text-2xl md:text-3xl mb-8">
                관리 방법
              </h3>
              <div className="space-y-5">
                {careItems.map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 text-xs mt-1" style={{ color: '#B79A63' }}>{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm leading-relaxed" style={{ color: '#343334', lineHeight: 1.9 }}>{c}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12 CLOSING ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '80vh', backgroundColor: '#4B2D29' }}>
        <div className="absolute inset-0">
          <img
            src={sofa1}
            alt="MELLOW LOUNGE CHAIR 마무리 비주얼"
            className="w-full h-full object-cover object-center opacity-40"
            style={{ mixBlendMode: 'luminosity' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(75,45,41,0.9) 40%, rgba(75,45,41,0.3))' }} />
        </div>

        <div className="relative z-10 flex items-center min-h-[80vh]">
          <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
            <p className="text-xs tracking-widest mb-6" style={{ color: '#B79A63' }}>12 — CLOSING</p>
            <h2
              style={{ fontFamily: "'Noto Serif KR', serif", color: '#F5F1E9', fontWeight: 400, lineHeight: 1.4 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-10"
            >
              하루의 쉼이<br />
              <em style={{ fontStyle: 'italic', color: '#AABCCD' }}>머무는</em><br />
              가장 편안한 자리
            </h2>
            <div className="w-12 mb-8" style={{ borderTop: '1px solid #B79A63' }} />
            <p className="text-sm tracking-widest mb-12" style={{ color: '#E3DACB', letterSpacing: '0.2em' }}>
              MELLOW LOUNGE CHAIR
            </p>
            <button
              className="px-10 py-4 text-sm tracking-widest transition-all hover:bg-[#F5F1E9] hover:text-[#4B2D29]"
              style={{ border: '1px solid #F5F1E9', color: '#F5F1E9', letterSpacing: '0.2em' }}
              onClick={() => alert('구매하기 — 포트폴리오 시안')}
            >
              구매하기
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#F5F1E9' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest mb-6" style={{ color: '#B79A63' }}>DESIGNER</p>
              <h2
                style={{ fontFamily: "'Noto Serif KR', serif", color: '#4B2D29', fontWeight: 500, lineHeight: 1.2 }}
                className="text-4xl md:text-5xl mb-4"
              >
                Baek<br />Seong Jeon
              </h2>
              <p className="text-sm tracking-widest mb-8" style={{ color: '#AABCCD', letterSpacing: '0.15em' }}>
                UI/UX Designer · Web Designer
              </p>
              <div className="w-8 mb-8" style={{ borderTop: '1px solid #B79A63' }} />
              <a
                href="mailto:py.hash2023@gmail.com"
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: '#343334', letterSpacing: '0.05em' }}
              >
                py.hash2023@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest mb-6" style={{ color: '#B79A63' }}>TOOLS</p>
              <div className="flex flex-col gap-4">
                {['Photoshop', 'Illustrator', 'Figma', 'HTML'].map((tool) => (
                  <div key={tool} className="flex items-center gap-4" style={{ borderBottom: '1px solid #E3DACB', paddingBottom: '1rem' }}>
                    <span
                      className="text-xs font-mono tracking-widest"
                      style={{ color: '#B79A63', minWidth: '1.5rem' }}
                    >
                      ✦
                    </span>
                    <span className="text-sm" style={{ color: '#343334', letterSpacing: '0.1em' }}>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12" style={{ backgroundColor: '#343334', color: '#E3DACB' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p style={{ fontFamily: "'Noto Serif KR', serif", letterSpacing: '0.3em', fontSize: '1rem', fontWeight: 600 }}>
                MELLOW
              </p>
              <p className="mt-2 text-xs" style={{ color: '#B79A63' }}>가구 브랜드 포트폴리오 작업</p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: '#E3DACB', opacity: 0.5, maxWidth: '28rem' }}>
              본 페이지는 개인 포트폴리오 작업입니다.
              MELLOW는 실제 존재하는 브랜드가 아니며, 상품 정보 및 가격은 모두 가상의 설정입니다.
              실제 판매 제품과 혼동하지 마십시오.
            </div>
          </div>
          <div className="mt-10 pt-6 text-xs" style={{ borderTop: '1px solid rgba(179,154,99,0.3)', color: '#B79A63', opacity: 0.6 }}>
            <p>© 2026 Portfolio Work — MELLOW Lounge Chair Detail Page</p>
            <p className="mt-2" style={{ opacity: 0.7 }}>
              Photo by{' '}
              <a
                href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%B0%BD%EB%AC%B8-%EC%98%86%EC%97%90-%EC%95%89%EC%95%84%EC%9E%88%EB%8A%94-%EB%91%90-%EA%B0%9C%EC%9D%98-%EC%9D%98%EC%9E%90-8iRWkpAkBrY"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#B79A63', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                Toa Heftiba on Unsplash
              </a>
              {' '}/ 상세페이지 제작 목적으로 편집 사용
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
