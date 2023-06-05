import NavBar from './navbar'
import AskButton from './askBtn'
import MainLogo from './mainlogo';

export default function Header() {
    return (
      <div className="flex flex-col items-center justify-between p-4 md:flex-row md:justify-center md:items-center">
        <MainLogo />
        <NavBar />
        <AskButton />
      </div>
    );
  }
  
