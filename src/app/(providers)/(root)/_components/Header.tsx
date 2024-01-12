import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b-2">
      <section className="flex items-center justify-evenly w-1/2">
        <Link href="/">
          <h1 className="font-bold text-xl">What Surv?</h1>
        </Link>
        <Navigation />
      </section>
      <section className="w-1/2 flex justify-end gap-4 p-4">
        <Link href="/join">
          <button className="w-[80px] h-[35px] border-2 border-[#ddd] rounded-xl ">Join</button>
        </Link>
        <Link href="/auth">
          <button className="w-[80px] h-[35px] bg-[#00709F] rounded-xl text-white">Login</button>
        </Link>
      </section>
    </header>
  );
}
