import LoginForm from '../components/login/LoginForm';
import { typo } from '../styles/typography';

export default function Login() {
  return (
    <div className="min-h-screen bg-white px-6 pt-[50px]">
      <div className="flex flex-col items-center">
        <h1 className={`${typo.Display_Sb} tracking-[-0.32px] text-[#0B1C30] text-center`}>
          환영합니다!
        </h1>
        <p className={`mt-[10px] ${typo.B2_Rg} text-[#45464D] text-center`}>
          루티와 함께 오늘의 습관을 시작해볼까요?
        </p>
        <div className="mt-6 w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
