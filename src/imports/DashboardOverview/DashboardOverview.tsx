import svgPaths from "./svg-gg8vxwn2gl";
import { imgLine2 } from "./svg-h0698";

function Text() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        Total Employees
      </p>
    </div>
  );
}

function Number1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Number">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] top-[calc(50%-18px)] w-[100px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
        990
      </p>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f7edff] flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Text />
        <Number />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[13px] items-center justify-center left-[calc(50%+4px)] rounded-[12px] top-1/2" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black w-[65px]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        This month
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="relative size-[16px]" data-name="ArrowLineRight-s">
            <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[30px] relative rounded-[12px] shrink-0 w-[132px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Text2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        New Joinees
      </p>
      <Card2 />
    </div>
  );
}

function Number3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Number">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] top-[calc(50%-18px)] w-[100px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
        51
      </p>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number3 />
    </div>
  );
}

function RollNumbers() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[154px]" data-name="Roll numbers">
      <Number2 />
    </div>
  );
}

function RollingNumber() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]" data-name="Rolling number">
      <RollNumbers />
    </div>
  );
}

function Content() {
  return (
    <div className="content-end flex flex-wrap gap-[8px_17px] items-end relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <RollingNumber />
      <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            +6.08%
          </p>
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
          <div className="relative shrink-0 size-[16px]" data-name="State=Default">
            <div className="absolute bottom-1/4 left-[9.37%] right-[12.5%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                <path clipRule="evenodd" d={svgPaths.p152e6a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f7edff] flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Text1 />
        <Content />
      </div>
    </div>
  );
}

function TopCards() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-[892px]" data-name="Top Cards">
      <Card />
      <Card1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        Attendance Today
      </p>
    </div>
  );
}

function Number4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Number">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] top-[calc(50%-18px)] w-[100px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>{`717/990 `}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-end flex flex-wrap gap-y-[8px] items-end justify-between relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <Number4 />
      <div className="content-center flex flex-wrap gap-[8px] items-center justify-end relative rounded-[12px] shrink-0" data-name="Icon & Text">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            98% of Total
          </p>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f7edff] flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Text3 />
        <Content1 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[13px] items-center justify-center left-[calc(50%+4px)] rounded-[12px] top-1/2" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black w-[65px]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        This month
      </p>
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-90">
          <div className="relative size-[16px]" data-name="ArrowLineRight-s">
            <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
                <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[30px] relative rounded-[12px] shrink-0 w-[132px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Text5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        New Joinees
      </p>
      <Card5 />
    </div>
  );
}

function Number6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[100px]" data-name="Number">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] top-[calc(50%-18px)] w-[100px]" style={{ fontFeatureSettings: "'ss01', 'cv01', 'cv11'" }}>
        51
      </p>
    </div>
  );
}

function Number5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number6 />
    </div>
  );
}

function RollNumbers1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[154px]" data-name="Roll numbers">
      <Number5 />
    </div>
  );
}

function RollingNumber1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[140px]" data-name="Rolling number">
      <RollNumbers1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-end flex flex-wrap gap-[8px_17px] items-end relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <RollingNumber1 />
      <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center justify-end min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            +6.08%
          </p>
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
          <div className="relative shrink-0 size-[16px]" data-name="State=Default">
            <div className="absolute bottom-1/4 left-[9.37%] right-[12.5%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 8">
                <path clipRule="evenodd" d={svgPaths.p152e6a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f7edff] flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Text4 />
        <Content2 />
      </div>
    </div>
  );
}

function BottomCards() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-[892px]" data-name="Bottom Cards">
      <Card3 />
      <Card4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[29px] relative rounded-[12px] shrink-0 w-[270px]" data-name="Text">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4b1b91] text-[14px] w-full">Department Wise Employees</p>
    </div>
  );
}

function LeftText() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-[23px]" data-name="Left Text">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-right w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        <p className="leading-[16px]">30K</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-right w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        <p className="leading-[16px]">20K</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-right w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        <p className="leading-[16px]">10K</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-center w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        <p className="leading-[16px]">0</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="1">
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            2,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="2">
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#96e2d6] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-8px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            5,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="3">
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-black flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[32px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            3,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="4">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pt-[16px] relative size-full">
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
          <div className="bg-[#92bfff] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
          <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-1/2 opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-28px]" data-name="Tooltip">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
                6,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="5">
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#aec7ed] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[72px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            1,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="6">
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#94e9b8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[12px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            4,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px relative" data-name="7">
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px opacity-0 w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px w-full" data-name="Rectangle" />
      <div className="bg-[#9f9ff8] flex-[1_0_0] max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] w-full" data-name="Rectangle" />
      <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.8)] content-stretch flex items-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px]" data-name="Tooltip">
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-[74px]" data-name="Text">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            2,000
          </p>
        </div>
      </div>
    </div>
  );
}

function VerticalBar() {
  return (
    <div className="absolute content-stretch flex inset-0 items-end justify-between pb-[28px]" data-name="Vertical Bar">
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[238px] items-center justify-end relative shrink-0 w-[476px]" data-name="Frame">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Horizontal Line">
        <div className="size-full" />
      </div>
      <VerticalBar />
      <div className="absolute bottom-0 content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[0] left-0 not-italic right-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center" data-name="Bottom Text">
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Sales</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Design</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Tech</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">HR</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Banking</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Legal</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Marketing</p>
        </div>
      </div>
    </div>
  );
}

function DepartmentEmployeesChart() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-end min-h-px min-w-px relative" data-name="Department Employees Chart">
      <LeftText />
      <Frame1 />
    </div>
  );
}

function ChartMotion() {
  return (
    <div className="content-stretch flex flex-col h-[295px] items-center justify-end py-[31px] relative rounded-[22px] shrink-0 w-[592px]" data-name="ChartMotion">
      <DepartmentEmployeesChart />
    </div>
  );
}

function DepartmentEmployeesSection() {
  return (
    <div className="bg-[#f9f9fa] content-stretch flex flex-col gap-[5px] h-[326px] items-start pt-[24px] relative rounded-[22px] shrink-0 w-[592px]" data-name="Department Employees Section">
      <div aria-hidden="true" className="absolute border border-[#f9f9fa] border-solid inset-0 pointer-events-none rounded-[22px]" />
      <Text6 />
      <ChartMotion />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-full relative rounded-[12px] shrink-0 w-[35px]" data-name="Text">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-end justify-between leading-[16px] not-italic py-[8px] relative size-full text-[#909090] text-[12px]">
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            01:00
          </p>
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            14:25
          </p>
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            14:25
          </p>
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            14:25
          </p>
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            14:25
          </p>
          <p className="relative shrink-0 w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            14:25
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[46px] items-start min-h-px min-w-px relative w-full" data-name="Frame">
      <div className="h-full relative rounded-[12px] shrink-0 w-[70px]" data-name="Text">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[16px] not-italic py-[8px] relative size-full text-[12px] text-black">
          <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Drew Cano
          </p>
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Kate Morrison
          </p>
          <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Andi Lane
          </p>
          <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Natali Craig
          </p>
          <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Drew Cano
          </p>
          <p className="relative shrink-0 whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Melody Macy
          </p>
        </div>
      </div>
      <Text7 />
    </div>
  );
}

function Block() {
  return (
    <div className="bg-[#f9f9fa] flex-[1_0_0] h-[330px] max-w-[272px] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Block">
      <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] min-w-[inherit] p-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-full" data-name="Text">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>{`Upcoming Meetings `}</p>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-[10%_0_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" data-name="Background" style={{ maskImage: `url('${imgLine2}')` }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 805 221.4">
        <g id="Background">
          <mask height="213" id="mask0_1_4515" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="805" x="0" y="9">
            <path d={svgPaths.pd8a6480} fill="url(#paint0_radial_1_4515)" id="Vector" />
          </mask>
          <g mask="url(#mask0_1_4515)">
            <path d={svgPaths.p3b580b00} fill="var(--fill-0, black)" id="Vector_2" opacity="0.6" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(402.499 40.6697) rotate(90) scale(151.518 402.499)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_4515" r="1">
            <stop stopOpacity="0.1" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative" data-name="Frame">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Horizontal Line">
        <div className="size-full" />
      </div>
      <div className="absolute inset-0" data-name="State=Default">
        <div className="absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" style={{ maskImage: `url('${imgLine2}')` }}>
          <div className="absolute inset-[-0.19%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 161.925">
              <path d={svgPaths.p357d44c0} id="Line 2" stroke="var(--stroke-0, #A0BCE8)" strokeDasharray="2 4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <Background />
        <div className="absolute inset-[10%_0_24.58%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-24px] mask-size-[560px_240px]" data-name="Line" style={{ maskImage: `url('${imgLine2}')` }}>
          <div className="absolute inset-[7.87%_0_4.11%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 147.938">
              <g id="Line">
                <path d={svgPaths.p33227360} stroke="url(#paint0_linear_1_4554)" strokeLinecap="round" />
                <path d={svgPaths.p33227360} stroke="var(--stroke-1, black)" strokeLinecap="round" style={{ mixBlendMode: "screen" }} />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4554" x1="4.29475" x2="805.5" y1="170.363" y2="170.363">
                  <stop stopOpacity="0.4" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-2px] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[0] left-0 not-italic right-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center" data-name="Bottom Text">
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Jan</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Feb</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Mar</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Apr</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">May</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Jun</p>
        </div>
        <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
          <p className="leading-[16px]">Jul</p>
        </div>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="bg-[#f9f9fa] content-stretch flex flex-col gap-[16px] h-[330px] items-start min-w-[662px] overflow-clip p-[24px] relative rounded-[20px] shrink-0 w-[892px]" data-name="Block">
      <div className="content-center flex flex-wrap gap-[8px_16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Group">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="1">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Total Sales
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="2">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Total Revenue
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="3">
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[29px]" data-name="Text">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
              Products
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[28px]" data-name="4">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.2)] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            |
          </p>
        </div>
        <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="5">
          <div className="relative shrink-0 size-[16px]" data-name="Dot">
            <div className="absolute inset-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d={svgPaths.p17b82700} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            This year
          </p>
        </div>
        <div className="content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="6">
          <div className="relative shrink-0 size-[16px]" data-name="Dot">
            <div className="absolute inset-[31.25%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <path d={svgPaths.p17b82700} fill="var(--fill-0, #A0BCE8)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            Last year
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="ChartMotion">
        <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-right w-[31px]" data-name="Left Text">
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            <p className="leading-[16px]">30K</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            <p className="leading-[16px]">20K</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            <p className="leading-[16px]">10K</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
            <p className="leading-[16px]">0</p>
          </div>
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[28px] items-start left-[252px] top-[136px] w-[892px]" data-name="Frame">
      <TopCards />
      <BottomCards />
      <DepartmentEmployeesSection />
      <Block />
      <Block1 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[240px] px-[8px] py-[4px] rounded-[12px] top-[96px] w-[90px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#4b1b91] text-[14px] w-full" style={{ fontFeatureSettings: "'ss01', 'cv01'" }}>
        Dashboard
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131313] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function IconBreadcrumb() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon-Breadcrumb">
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10px] size-[19.99px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9904 19.9904">
        <g clipPath="url(#clip0_1_4544)" id="Icon">
          <path d={svgPaths.p2fefeea} id="Vector" stroke="var(--stroke-0, #1A1339)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          <path d={svgPaths.p328ddd80} id="Vector_2" stroke="var(--stroke-0, #1A1339)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
        </g>
        <defs>
          <clipPath id="clip0_1_4544">
            <rect fill="white" height="19.9904" width="19.9904" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-[#d74242] left-[26.02px] opacity-82 rounded-[39602500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[7.985px] top-[5.99px]" data-name="Text" />;
}

function Button1() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[39.999px]" data-name="Button">
      <Icon />
      <Text9 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#f6f9fc] border-[#eceff3] border-[0.71px] border-solid col-1 h-[40px] ml-0 mt-0 rounded-[44px] row-1 w-[83.333px]" />
      <div className="bg-white col-1 ml-[6.25px] mt-[5.42px] rounded-[42.6px] row-1 shadow-[0px_2.84px_2.84px_0px_rgba(0,0,0,0.25),7.1px_7.1px_14.2px_0px_#24272c] size-[29.167px]" />
      <div className="col-1 ml-[12.5px] mt-[11.67px] relative row-1 size-[16.667px]" data-name="Outline/General/Sun">
        <div className="absolute inset-[5.21%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9306 14.9306">
            <g id="Icon">
              <path d={svgPaths.p21efd900} fill="var(--fill-0, #F5B000)" />
              <path clipRule="evenodd" d={svgPaths.p3e81ff00} fill="var(--fill-0, #F5B000)" fillRule="evenodd" />
              <path d={svgPaths.p1b201480} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.pd10b6c0} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.p3beedd00} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.p33254900} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.p25cd6b00} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.p1e83bc00} fill="var(--fill-0, #F5B000)" />
              <path d={svgPaths.p207512c0} fill="var(--fill-0, #F5B000)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return <div className="bg-[#d4dff7] rounded-[40px] shrink-0 size-[40px]" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button1 />
      <Group3 />
      <Frame8 />
    </div>
  );
}

function Header() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[28px] py-[20px] relative w-full">
          <IconBreadcrumb />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function IdfcLogoWebsite() {
  return (
    <div className="h-[47px] overflow-clip relative shrink-0 w-[134px]" data-name="IDFC-logo-website 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 47">
        <g id="Group">
          <path clipRule="evenodd" d="M0 47H134V0H0V47Z" fill="var(--fill-0, #9D1D27)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p11855300} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p198ee000} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_3" />
          <g id="Mask group">
            <mask height="47" id="mask0_1_4521" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="134" x="0" y="0">
              <g id="Group_2">
                <path d="M0 47H134V0H0V47Z" fill="var(--fill-0, white)" id="Vector_4" />
              </g>
            </mask>
            <g mask="url(#mask0_1_4521)">
              <path clipRule="evenodd" d={svgPaths.p9760800} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <IdfcLogoWebsite />
      <div className="content-stretch flex flex-col items-start opacity-0 py-[2px] relative shrink-0 w-full" data-name="Line">
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212 1">
              <line id="Line" stroke="var(--stroke-0, black)" strokeLinecap="round" x1="0.5" x2="211.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartPieSlice() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartPieSlice">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChartPieSlice">
          <path d={svgPaths.p3e4e8900} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ChartPieSlice />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[78px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Dashboard</p>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <Icon1 />
      <Text10 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#e4c5ff] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[rgba(75,27,145,0.55)] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText />
        </div>
      </div>
    </div>
  );
}

function MynauiUsers() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:users">
          <path d={svgPaths.p3f3d5450} id="Vector" stroke="var(--stroke-0, #131313)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[78px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Employees</p>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiUsers />
      <Text11 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] size-[16px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText1 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_20.83%]" data-name="Group">
      <div className="absolute inset-[-3%_-4.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 17.6667">
          <g id="Group">
            <path d={svgPaths.p1ca43d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" />
            <path d={svgPaths.p3a079ade} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p13520f00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.33333 14.6667V14.675" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsBiometricDevice() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:biometric-device">
      <Group />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[83px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Attendance</p>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <HugeiconsBiometricDevice />
      <Text12 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText2 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[134px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Attendance Details</p>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane />
      <Text13 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText3 />
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[135px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Missed Attendance</p>
    </div>
  );
}

function IconText4() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane1 />
      <Text14 />
    </div>
  );
}

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText4 />
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[98px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Shift Duration</p>
    </div>
  );
}

function IconText5() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane2 />
      <Text15 />
    </div>
  );
}

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText5 />
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <path d={svgPaths.p980e500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Leaves</p>
    </div>
  );
}

function IconText6() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane3 />
      <Text16 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText6 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Leaves</p>
    </div>
  );
}

function IconText7() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane4 />
      <Text17 />
    </div>
  );
}

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText7 />
        </div>
      </div>
    </div>
  );
}

function MynauiAeroplane5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="mynaui:aeroplane">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mynaui:aeroplane">
          <g id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[127px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Work From Home</p>
    </div>
  );
}

function IconText8() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane5 />
      <Text18 />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText8 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group">
            <path d={svgPaths.p2c731c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p8d29080} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p18961b00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MynauiTarget() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="mynaui:target">
      <Group1 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[52px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Targets</p>
    </div>
  );
}

function IconText9() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiTarget />
      <Text19 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText9 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MynauiVideo() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="mynaui:video">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="mynaui:video">
          <path d={svgPaths.p2b324f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[66px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Meetings</p>
    </div>
  );
}

function IconText10() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiVideo />
      <Text20 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText10 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LsiconReportOutline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lsicon:report-outline">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lsicon:report-outline">
          <path d={svgPaths.p3fcbe680} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[56px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Reports</p>
    </div>
  );
}

function IconText11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <LsiconReportOutline />
      <Text21 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText11 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.16%_3.57%_4.17%_5.14%]" data-name="Group">
      <div className="absolute inset-[-3.27%_-3.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4572 19.534">
          <g id="Group">
            <path d={svgPaths.p21f89e70} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p2ec25100} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineAnnouncementMegaphone() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="streamline:announcement-megaphone">
      <Group2 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[119px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Announcements</p>
    </div>
  );
}

function IconText12() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <StreamlineAnnouncementMegaphone />
      <Text22 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText12 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeuiSettingOutlined() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="weui:setting-outlined">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="weui:setting-outlined">
          <path clipRule="evenodd" d={svgPaths.p3d21ca00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[58px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Settings</p>
    </div>
  );
}

function IconText13() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <WeuiSettingOutlined />
      <Text23 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px]" data-name="Icon">
      <div className="relative shrink-0 size-[16px]" data-name="ArrowLineRight-s">
        <div className="absolute inset-[21.87%_34.38%_21.88%_34.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path clipRule="evenodd" d={svgPaths.p8b14d80} fill="var(--fill-0, black)" fillOpacity="0.2" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative w-full">
          <IconText13 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start pb-[12px] relative shrink-0 w-full" data-name="Frame">
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Content11 />
      <Content12 />
      <Content13 />
      <Content14 />
      <Content15 />
      <Content16 />
    </div>
  );
}

function Frame9() {
  return <div className="content-stretch flex gap-[10px] h-[412.104px] items-end justify-center pt-[395px] shrink-0 w-full" />;
}

function VuesaxBoldBuildings() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/buildings">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="buildings">
          <g id="Vector" opacity="0" />
          <path d={svgPaths.p9a99f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p36316300} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldArrowDown() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/arrow-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-down">
          <path d={svgPaths.p2f0d6e00} fill="var(--fill-0, black)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute bg-[#e4c5ff] h-[50px] left-[889px] rounded-[20px] top-[15px] w-[215px]" data-name="Card">
      <div className="absolute left-[15px] size-[24px] top-[13px]" data-name="Icon/Building/buildings">
        <VuesaxBoldBuildings />
      </div>
      <p className="absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] left-[49px] text-[14px] text-black top-[15px] whitespace-nowrap">Select Company</p>
      <div className="-translate-y-1/2 absolute left-[176px] size-[24px] top-1/2" data-name="Icon/Arrow/arrow-down">
        <VuesaxBoldArrowDown />
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="bg-white h-[108px] relative rounded-[16px] shrink-0 w-[1124px]" data-name="Base">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[2px_4px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function FooterLogoAndText() {
  return (
    <div className="h-[31.287px] relative shrink-0 w-[149.999px]" data-name="Footer Logo and Text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149.999 31.2866">
        <g id="Footer Logo and Text">
          <g id="WorkPulse">
            <path d={svgPaths.p23f4fd00} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p3c91aa00} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p198bf500} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p7107100} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p39af900} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p303a0800} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p3e7800} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p8f79600} fill="var(--fill-0, #170D3F)" />
            <path d={svgPaths.p2340280} fill="var(--fill-0, #170D3F)" />
          </g>
          <g id="Vector">
            <path d={svgPaths.p23fd6d80} fill="#D9D9D9" />
            <path d={svgPaths.p23fd6d80} fill="url(#paint0_linear_1_4442)" />
            <path d={svgPaths.p2f9e9c80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p675e600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4442" x1="50.7212" x2="15.3086" y1="-11.2528" y2="21.0884">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function FooterLeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Footer Left Content">
      <FooterLogoAndText />
      <p className="font-['Public_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">© Copyright 2026. All Rights Reserved.</p>
    </div>
  );
}

function FooterLeftSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer Left Section">
      <FooterLeftContent />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 h-[19.932px] ml-[32.57px] mt-[2.15px] relative row-1 w-[87.938px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9379 19.9322">
        <g id="Group">
          <path d={svgPaths.p3d79f00} fill="var(--fill-0, #170D3F)" id="Vector" />
          <path d={svgPaths.p171f80} fill="var(--fill-0, #170D3F)" id="Vector_2" />
          <path d={svgPaths.p16e59080} fill="var(--fill-0, #170D3F)" id="Vector_3" />
          <path d={svgPaths.p277bb900} fill="var(--fill-0, #170D3F)" id="Vector_4" />
          <path d={svgPaths.p10172700} fill="var(--fill-0, #170D3F)" id="Vector_5" />
          <path d={svgPaths.pc7119f0} fill="var(--fill-0, #170D3F)" id="Vector_6" />
          <path d={svgPaths.p363bd680} fill="var(--fill-0, #170D3F)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 h-[23.966px] ml-0 mt-0 relative row-1 w-[28.724px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7244 23.9663">
        <g id="Group">
          <path d={svgPaths.p20f88d80} fill="url(#paint0_linear_1_4438)" id="Vector" />
          <path d={svgPaths.p1e295c80} fill="url(#paint1_linear_1_4438)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_4438" x1="31.4206" x2="11.727" y1="0.401149" y2="20.5137">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_4438" x1="25.7579" x2="4.11282" y1="-5.93045" y2="16.1751">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[106.49px] mt-0 place-items-start relative row-1" data-name="Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function FooterRightContent() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Footer Right Content">
      <p className="col-1 font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] ml-0 mt-[2.95px] relative row-1 text-[#4b1b91] text-[16.815px] tracking-[-1.2729px] whitespace-nowrap">Powered By</p>
      <Group4 />
    </div>
  );
}

function FooterRightSection() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Footer Right Section">
      <FooterRightContent />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="absolute content-stretch flex inset-[21.63%_2.14%] items-center justify-between" data-name="Footer Content">
      <FooterLeftSection />
      <FooterRightSection />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[252px] top-[1154px]" data-name="Footer">
      <Base />
      <FooterContent />
    </div>
  );
}

export default function DashboardOverview() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard Overview">
      <Frame />
      <Text8 />
      <div className="-translate-x-1/2 absolute bg-[#fdfdfd] content-stretch flex items-center left-[calc(50%+106px)] top-0 w-[1228px]" data-name="Header">
        <Header />
      </div>
      <div className="absolute bg-[#fdfdfd] content-stretch flex flex-col gap-[15px] h-[1024px] items-center left-0 py-[16px] top-0 w-[212px]" data-name="Sidebar">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <Frame4 />
        <Frame5 />
        <Frame9 />
      </div>
      <Card6 />
      <Footer />
    </div>
  );
}