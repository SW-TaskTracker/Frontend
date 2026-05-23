import { typo } from '../../styles/typography';

interface NavbarProps {
  title: string;
}

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className="flex w-[390px] px-5 py-4 justify-center items-center">
      <span className={`${typo.T1_Eb} tracking-[-0.5px] text-black`}>
        {title}
      </span>
    </nav>
  );
}
