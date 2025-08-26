
import React, { useState } from "react";
import WelcomePage from "./Componenets/WelcomePage";
import SignInPage from "./Componenets/SignInPage";
import CreateAccountPage from "./Componenets/CreateAccountPage";
import AccountSettingsPage from "./Componenets/AccountSettingsPage";
import SuccessPage from "./Componenets/SuccessPage";
import Navigation from "./Componenets/Navigation";

function App() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  
  const goHome = () => {
    setPage(1); 
  };
  
  const CreateAccount = () => {
    setPage(3); 
  };
  
  const SignIn = () => {
    setPage(2); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-6">
      <div className="w-[370px] h-[90vh] bg-gray-50 border-1 border-gray-200 p-6 flex flex-col justify-start">
        {page === 1 && (
          <WelcomePage CreateAccount={CreateAccount} SignIn={SignIn} />
        )}

        {page === 2 && <SignInPage />}

        {page === 3 && <CreateAccountPage />}

        {page === 4 && <AccountSettingsPage />}

        {page === 5 && <SuccessPage goHome={goHome} />}
      </div>

      <Navigation 
        page={page} 
        totalPages={totalPages} 
        goHome={goHome} 
        goPrev={goPrev} 
        goNext={goNext} 
      />
    </div>
  );
}

export default App;
