import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  //  locale မရှိလျှင် fallback သတ်မှတ်
  const currentLocale = locale || "en";

  return {
    locale: currentLocale, //  မဖြစ်မနေလည်း locale ပြန်ပေးရမယ်
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});