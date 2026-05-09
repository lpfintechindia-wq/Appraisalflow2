import svgPaths from "./svg-he4v6zhz9x";

function IdfcLogoWebsite() {
  return (
    <div className="h-[47px] overflow-clip relative shrink-0 w-[134px]" data-name="IDFC-logo-website 5">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 47">
        <g id="Group">
          <path clipRule="evenodd" d="M0 47H134V0H0V47Z" fill="var(--fill-0, #9D1D27)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p11855300} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p198ee000} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_3" />
          <g id="Mask group">
            <mask height="47" id="mask0_66_1587" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="134" x="0" y="0">
              <g id="Group_2">
                <path d="M0 47H134V0H0V47Z" fill="var(--fill-0, white)" id="Vector_4" />
              </g>
            </mask>
            <g mask="url(#mask0_66_1587)">
              <path clipRule="evenodd" d={svgPaths.p9760800} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Vector_5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
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

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ChartPieSlice />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[78px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Dashboard</p>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <Icon />
      <Text />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative size-full">
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

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[78px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Employees</p>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiUsers />
      <Text1 />
    </div>
  );
}

function Icon1() {
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

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText1 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon1 />
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

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[83px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Attendance</p>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <HugeiconsBiometricDevice />
      <Text2 />
    </div>
  );
}

function Icon2() {
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

function Content2() {
  return (
    <div className="bg-[#e8ceff] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText2 />
          <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon2 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#4b1b91] border-l-3 border-solid inset-0 pointer-events-none" />
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

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[134px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Attendance Details</p>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane />
      <Text3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#e8ceff] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative size-full">
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

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[135px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Missed Attendance</p>
    </div>
  );
}

function IconText4() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane1 />
      <Text4 />
    </div>
  );
}

function Content4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative size-full">
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

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[98px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Shift Duration</p>
    </div>
  );
}

function IconText5() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane2 />
      <Text5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-y-[4px] items-center px-[15px] py-[8px] relative size-full">
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

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Leaves</p>
    </div>
  );
}

function IconText6() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiAeroplane3 />
      <Text6 />
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

function Content6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText6 />
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

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[52px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Targets</p>
    </div>
  );
}

function IconText7() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiTarget />
      <Text7 />
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

function Content7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText7 />
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

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[66px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Meetings</p>
    </div>
  );
}

function IconText8() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <MynauiVideo />
      <Text8 />
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

function Content8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText8 />
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

function Text9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[56px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Reports</p>
    </div>
  );
}

function IconText9() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <LsiconReportOutline />
      <Text9 />
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

function Content9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText9 />
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

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[119px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Announcements</p>
    </div>
  );
}

function IconText10() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <StreamlineAnnouncementMegaphone />
      <Text10 />
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

function Content10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText10 />
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

function Text11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0 w-[58px]" data-name="Text">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black w-full">Settings</p>
    </div>
  );
}

function IconText11() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative rounded-[12px]" data-name="Icon & Text">
      <WeuiSettingOutlined />
      <Text11 />
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

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[4px] items-center px-[15px] py-[8px] relative size-full">
          <IconText11 />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start pb-[12px] relative shrink-0 w-full" data-name="Frame">
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Content11 />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[14.224px] ml-[23.24px] mt-[1.53px] relative row-1 w-[62.758px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.7578 14.2246">
        <g id="Group">
          <path d={svgPaths.p36f95b80} fill="var(--fill-0, #170D3F)" id="Vector" />
          <path d={svgPaths.p35049780} fill="var(--fill-0, #170D3F)" id="Vector_2" />
          <path d={svgPaths.p13cd3000} fill="var(--fill-0, #170D3F)" id="Vector_3" />
          <path d={svgPaths.p1957ddc0} fill="var(--fill-0, #170D3F)" id="Vector_4" />
          <path d={svgPaths.p329ba180} fill="var(--fill-0, #170D3F)" id="Vector_5" />
          <path d={svgPaths.p1c77f3a0} fill="var(--fill-0, #170D3F)" id="Vector_6" />
          <path d={svgPaths.p1ff1bd00} fill="var(--fill-0, #170D3F)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 h-[17.104px] ml-0 mt-0 relative row-1 w-[20.499px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4992 17.1036">
        <g id="Group">
          <path d={svgPaths.p23784100} fill="url(#paint0_linear_66_1491)" id="Vector" />
          <path d={svgPaths.p486e600} fill="url(#paint1_linear_66_1491)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_66_1491" x1="22.4235" x2="8.369" y1="0.286217" y2="14.6397">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_66_1491" x1="18.3821" x2="2.93494" y1="-4.23239" y2="11.5434">
            <stop offset="1.33195e-07" stopColor="#C07BFC" />
            <stop offset="1" stopColor="#4B1B91" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[10px] items-end justify-center pt-[395px] relative shrink-0 w-full">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#4b1b91] text-[12px] tracking-[-0.9084px] whitespace-nowrap">Powered By</p>
      <Group3 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#131313] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Attendance Management</p>
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

function Icon9() {
  return (
    <div className="absolute left-[10px] size-[19.99px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9904 19.9904">
        <g clipPath="url(#clip0_66_1513)" id="Icon">
          <path d={svgPaths.p2fefeea} id="Vector" stroke="var(--stroke-0, #1A1339)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
          <path d={svgPaths.p328ddd80} id="Vector_2" stroke="var(--stroke-0, #1A1339)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66587" />
        </g>
        <defs>
          <clipPath id="clip0_66_1513">
            <rect fill="white" height="19.9904" width="19.9904" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#d74242] left-[26.02px] opacity-82 rounded-[39602500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-[7.985px] top-[5.99px]" data-name="Text" />;
}

function Button1() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[39.999px]" data-name="Button">
      <Icon9 />
      <Text12 />
    </div>
  );
}

function Group6() {
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

function Frame2() {
  return <div className="bg-[#d4dff7] rounded-[40px] shrink-0 size-[40px]" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button1 />
      <Group6 />
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[28px] py-[20px] relative size-full">
          <IconBreadcrumb />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1c1e21] text-[22px] whitespace-nowrap">Attendance</p>
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[13.091px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0909 13.0909">
        <g id="search">
          <path d={svgPaths.p13abac00} id="Vector" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
          <path d={svgPaths.p337bf000} id="Vector_2" stroke="var(--stroke-0, #4F5661)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#fdfdfd] h-[40px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Search">
      <div className="content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6f7987] text-[14px] whitespace-nowrap">Search</p>
        <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
          <Search1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5cbd3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Search />
    </div>
  );
}

function FormkitDown() {
  return (
    <div className="h-[8.75px] relative shrink-0 w-[20px]" data-name="formkit:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8.75">
        <g clipPath="url(#clip0_66_1998)" id="formkit:down">
          <path d={svgPaths.p1aeb9f80} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_66_1998">
            <rect fill="white" height="8.75" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#c5cbd3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Today</p>
      <FormkitDown />
    </div>
  );
}

function MynauiFilter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mynaui:filter">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mynaui:filter">
          <path d={svgPaths.pd5e9300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[20px] py-[8px] relative rounded-[6px] shrink-0 w-[112px]">
      <div aria-hidden="true" className="absolute border border-[#c5cbd3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <MynauiFilter />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Filter</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Frame80 />
      <Frame83 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame94 />
      <Frame82 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#f6f6f6] relative rounded-tl-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">Employee ID</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">LP872930</p>
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
      <Frame11 />
      <Frame8 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function BasilSortSolid() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="basil:sort-solid">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="basil:sort-solid">
          <path d={svgPaths.p664ac00} fill="var(--fill-0, #1C1E21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f6f6f6] h-[52px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <BasilSortSolid />
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">Name</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Frances Swann</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Judith Rodriguez</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Paula Mora</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Stephanie Sharkey</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Daniel Hamilton</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Stephanie Nicol</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Kenneth Allen</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Rodger Struck</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Iva Ryan</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[10px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Patricia Sanders</p>
        </div>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[266px]">
      <Frame21 />
      <Frame5 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">Designation</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">Sales Executive</p>
        </div>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[308px]">
      <Frame32 />
      <Frame9 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">Punch In</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">9:01 AM</p>
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]">
      <Frame42 />
      <Frame6 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[14px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">Punch Out</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[24px] py-[12px] relative size-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#141518] text-[16px] whitespace-nowrap">06:02 PM</p>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]">
      <Frame52 />
      <Frame7 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f6f6f6] relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip py-[14px] relative rounded-[inherit] size-full">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6f7987] text-[16px] whitespace-nowrap">View</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group7 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame99 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group8 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView1 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame100 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group9 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView2 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame101 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group10 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView3 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame102 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group11 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView4 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame103 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group12 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView5 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame104 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group13 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView6 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame105 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group14 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView7 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame106 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group15 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView8 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame107 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute inset-[20.83%_8.33%]" data-name="Group">
      <div className="absolute inset-[-5.36%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9167 12.9167">
          <g id="Group">
            <path d={svgPaths.p2f1bd500} id="Vector" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.p1cbded80} id="Vector_2" stroke="var(--stroke-0, #141518)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsView9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="hugeicons:view">
      <Group16 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HugeiconsView9 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8ceff] border-b border-solid inset-0 pointer-events-none" />
      <Frame108 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[82px]">
      <Frame62 />
      <Frame10 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[1158px]">
      <Frame90 />
      <Frame89 />
      <Frame87 />
      <Frame85 />
      <Frame88 />
      <Frame86 />
    </div>
  );
}

function MaterialSymbolsDownloadRounded() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="material-symbols:download-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:download-rounded">
          <path d={svgPaths.p3dfd7380} fill="var(--fill-0, #1C1E21)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[11px] h-[40px] items-center px-[20px] py-[8px] relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c5cbd3] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <MaterialSymbolsDownloadRounded />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Download CSV</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative rounded-[7px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d96a3] text-[14px] text-center whitespace-nowrap">Prev</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#4b1b91] content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#4b1b91] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-center text-white w-full">1</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[32px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d96a3] text-[14px] text-center w-full">2</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[32px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d96a3] text-[14px] text-center w-full">3</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[32px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d96a3] text-[14px] text-center w-full">4</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[4px] shrink-0 size-[32px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8d96a3] text-[14px] text-center w-full">5</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <Frame74 />
      <Frame75 />
      <Frame76 />
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-center px-[9px] py-[5px] relative rounded-[7px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#414141] text-[14px] text-center whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Frame72 />
      <Frame73 />
      <Frame79 />
    </div>
  );
}

function IconParkDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-park:down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-park:down">
          <path d="M12 6L8 10L4 6" id="Vector" stroke="var(--stroke-0, #1C1E21)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#1c1e21] text-[14px] whitespace-nowrap">Show 1-10</p>
      <IconParkDown />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame30 />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1158px]">
        <Frame81 />
        <Frame98 />
        <Frame109 />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame91 />
      <Frame84 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1160px]">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-center left-[212px] top-0 w-[1228px]">
      <div className="bg-[#fdfdfd] content-stretch flex items-center relative shrink-0 w-full" data-name="Header">
        <Header />
      </div>
      <Frame95 />
    </div>
  );
}

export default function Attendance() {
  return (
    <div className="bg-white relative size-full" data-name="Attendance">
      <div className="absolute bg-[#fdfdfd] content-stretch flex flex-col gap-[15px] h-[1024px] items-center left-0 py-[16px] top-0 w-[212px]" data-name="Sidebar">
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
        <Frame />
        <Frame1 />
        <Frame96 />
      </div>
      <Frame97 />
    </div>
  );
}