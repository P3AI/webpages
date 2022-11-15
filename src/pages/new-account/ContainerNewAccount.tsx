import React, {useEffect, useState} from 'react';
import {CreateAccountEntryPage} from "./CreateAccountEntryPage";
import {QuestionnairePage1} from "./QuestionnairePage1";
import {QuestionnairePage2} from "./QuestionnairePage2";
import {CreateAccountSuccessPage} from "./CreateAccountSuccessPage";
import '../__pages.css'

export enum PagesEnum {
  First,
  Second,
  Third,
  Success
}

function ContainerNewAccount() {

  const [showPage, setShowPage] = useState<PagesEnum>(PagesEnum.First);
  const [showPageContent, setShowPageContent] = useState<JSX.Element>(<div/>);

  useEffect(() => {
    const getShowPage = (pageEnum: PagesEnum): JSX.Element => {
      switch (pageEnum){
        case PagesEnum.First:
          return <CreateAccountEntryPage trigger={setShowPage}></CreateAccountEntryPage>
        case PagesEnum.Second:
          return <QuestionnairePage1 trigger={setShowPage}></QuestionnairePage1>
        case PagesEnum.Third:
          return <QuestionnairePage2 trigger={setShowPage}></QuestionnairePage2>
        case PagesEnum.Success:
          return <CreateAccountSuccessPage></CreateAccountSuccessPage>
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

export default ContainerNewAccount;
