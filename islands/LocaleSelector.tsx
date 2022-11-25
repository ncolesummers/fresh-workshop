import { useState } from "preact/hooks";

const localeFmt = new Intl.DisplayNames("en", { type: "language" });

export default function LocaleSelector() {
  const [locale, setLocale] = useState("");
  const date = new Date();

  let language: string | undefined = undefined;
  let timeSample: string | undefined = undefined;
  if (locale) {
    try {
      const loc = new Intl.Locale(locale);
      language = localeFmt.of(loc.language);
      const dateFmt = new Intl.DateTimeFormat(locale, {dateStyle: "full"});
      timeSample = dateFmt.format(date);
    } catch {
      // ignore error
    }
  }

  return (
    <form method="post" class="space-x-2">
      <label htmlFor="locale">Locale</label>
      <input
        type="text"
        name="locale"
        id="locale"
        class="border px-2 py-1"
        value={locale}
        onInput={(e) => setLocale(e.currentTarget.value)}
      />
      <button
        type="submit"
        class="px-2 py-2 bg-blue(500 hover:700 disabled:200) text-white font-medium"
      >
        Save
      </button>
      {language && timeSample && (<dl class="mt-4">
        <dd class="font-bold">Language</dd>
        <dt>{language}</dt>
        <dd class="font-bold">Time sample</dd>
        <dt>{timeSample}</dt>
      </dl>)}
    </form>
  );
}
