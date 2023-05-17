import { createContext, useContext, useReducer } from "react";
import React from "react";
import ImageContent from "../emailLib/ImageContent";
import { v4  } from 'uuid';

const EmailTemplate = createContext();

let emailTracker = [];
const initialState = {
  darkMode: false,
  mainArray: [],
};
const EmailTemplateProvider = ({ children }) => {
  const reducerFun = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case "CHANGE_HEADER_WHITE":
        console.log("Change header White I am here");
        if (payload.libtype === "Image") {
          emailTracker = [<ImageContent {...payload.values} />];
          // emailTracker.push(<ImageContent {...payload.values}/>)
        }

        return { ...state, darkMode: false };
      case "CHANGE_HEADER_DARK":
        if (payload.libtype === "Image") {
          emailTracker = [<ImageContent {...payload.values} />];
          // emailTracker.push(<ImageContent {...payload.values}/>)
        }

        return { ...state, darkMode: true };

  


       
          

   

      default:
        break;
    }
  };

  const [emailTemplate, emailTemplateDispatcher] = useReducer(
    reducerFun,
    initialState
  );

  console.log(emailTemplate, " whole emailTemplate");
  return (
    <EmailTemplate.Provider
      value={{ emailTemplate, emailTemplateDispatcher, emailTracker }}
    >
      {children}
    </EmailTemplate.Provider>
  );
};

const useEmailTemplate = () => useContext(EmailTemplate);

export { EmailTemplateProvider, useEmailTemplate };
