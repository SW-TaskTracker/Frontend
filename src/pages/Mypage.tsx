import Navbar from '../components/common/Navbar';
import ProfileSection from '../components/mypage/ProfileSection';
import StatsSection from '../components/mypage/StatsSection';
import SettingsSection from '../components/mypage/SettingsSection';
import { typo } from '../styles/typography';
import logoutIcon from '../assets/logout.svg';

const NICKNAME = '루티';

export default function Mypage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Navbar variant="greeting" nickname={NICKNAME} />

      <div className="flex flex-col px-6">
        <div className="mt-[32px] flex justify-center">
          <ProfileSection nickname={NICKNAME} />
        </div>

        <div className="mt-[32px]">
          <StatsSection activeHabits={12} achievementRate={85} />
        </div>

        <div className="mt-[32px]">
          <SettingsSection />
        </div>

        <div className="mt-[32px] flex items-center justify-center gap-[5px]">
          <img src={logoutIcon} alt="logout" />
          <span className={`${typo.B2_Rg} text-[#3D4A3E]`} style={{ lineHeight: '24px' }}>
            로그아웃
          </span>
        </div>
      </div>
    </div>
  );
}
