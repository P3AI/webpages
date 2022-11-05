import React, {useEffect, useState} from 'react';
import './App.css';
import {FirstPage} from "./pages/FirstPage";
import {SecondPage} from "./pages/SecondPage";
import {ThirdPage} from "./pages/ThirdPage";
import {SuccessPage} from "./pages/SuccessPage";

export enum PagesEnum {
  First,
  Second,
  Third,
  Success
}

function App() {

  const [showPage, setShowPage] = useState<PagesEnum>(PagesEnum.First);
  const [showPageContent, setShowPageContent] = useState<JSX.Element>(<div/>);

  useEffect(() => {
    const getShowPage = (pageEnum: PagesEnum): JSX.Element => {
      switch (pageEnum){
        case PagesEnum.First:
          return <FirstPage trigger={setShowPage}></FirstPage>
        case PagesEnum.Second:
          return <SecondPage trigger={setShowPage}></SecondPage>
        case PagesEnum.Third:
          return <ThirdPage trigger={setShowPage}></ThirdPage>
        case PagesEnum.Success:
          return <SuccessPage></SuccessPage>
      }
      return <div></div>
    }
    setShowPageContent(getShowPage(showPage))
  }, [showPage])

  return (
    <div className="App center-screen">
      {showPageContent}
    </div>
  );
}

export default App;
