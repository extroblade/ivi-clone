import "@/app/styles/global.scss";
import "./stories.scss";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context";
import { Provider } from "react-redux";
import { store } from "@/shared/store";
import { ClassAttributes, ImgHTMLAttributes, Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import * as nextImage from "next/image";

import i18n from "@/app/(config)/i18n/i18n";

export const parameters = {
  i18n,
  locale: "ru",
  locales: {
    ru: "Russian",
    en: "English",
  },
  nextRouter: {
    Provider: AppRouterContext.Provider,
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "ru", right: "ru", title: "Русский" },
        { value: "en", right: "🇺🇸", title: "English" },
      ],
      showName: true,
    },
  },
};

i18n.on("languageChanged", (locale) => {
  document.dir = i18n.dir(locale);
});
const i18nextStoryDecorator = (Story: any, context: { globals: { locale: any; }; }) => {
  const { locale } = context.globals;
  useEffect(() => {
    i18n.changeLanguage(locale).then(() => {
    }); //fix ws warn
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const reduxStoryDecorator = (Story: any) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} alt={props.alt} />;
  },
});

export default preview;
export const decorators = [reduxStoryDecorator, i18nextStoryDecorator];
