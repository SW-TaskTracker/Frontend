import { typo } from '../../styles/typography';
import calendarIcon from '../../assets/calendar.svg';
import screenIcon from '../../assets/screen.svg';

export default function SettingsSection() {
  return (
    <div className="flex flex-col">
      {/* 섹션 타이틀 */}
      <div className="flex flex-col items-start self-stretch px-[4px] py-0">
        <span className={`${typo.B2_Rg} text-[#3D4A3E]`}>환경설정</span>
      </div>

      {/* 습관 관리 */}
      <div className="flex items-center justify-between self-stretch p-[16px] mt-[10px]">
        <div className="flex items-center gap-[16px]">
          <img src={calendarIcon} alt="calendar" />
          <span className={`${typo.B2_Rg} text-[#191C1D]`} style={{ lineHeight: '24px' }}>
            습관 관리
          </span>
        </div>
      </div>

      {/* 화면 설정 */}
      <div
        className="flex items-center justify-between self-stretch p-[16px]"
        style={{ borderTop: '1px solid rgba(188, 202, 187, 0.30)' }}
      >
        <div className="flex items-center gap-[16px]">
          <img src={screenIcon} alt="screen" />
          <span className={`${typo.B2_Rg} text-[#191C1D]`} style={{ lineHeight: '24px' }}>
            화면 설정
          </span>
        </div>
      </div>
    </div>
  );
}
