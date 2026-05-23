import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import SignupForm from '../components/signup/SignupForm';
import { typo } from '../styles/typography';

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar title="Routiner" />
      <div className="flex flex-col items-center px-6">
        <h1 className={`mt-[30px] ${typo.Display_Sb} tracking-[-0.32px] text-[#0B1C30] text-center`}>
          Routiner와 함께 시작하기
        </h1>
        <p className={`mt-2 ${typo.B2_Rg} text-[#45464D] text-center`}>
          루티너에 오신 것을 환영합니다.
        </p>
        <div className="mt-[40px] w-full">
          <SignupForm />
        </div>
        <p className="mt-6">
          <span className={`${typo.B2_Rg} text-[#45464D]`}>이미 계정이 있으신가요? </span>
          <span
            className={`${typo.B2_Bd} text-primary cursor-pointer`}
            onClick={() => navigate('/')}
          >
            로그인
          </span>
        </p>
      </div>
    </div>
  );
}
