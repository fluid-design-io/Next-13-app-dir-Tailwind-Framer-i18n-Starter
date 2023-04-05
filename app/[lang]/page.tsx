import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Template } from "@/components/Template";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className='min-h-screen bg-zinc-200 dark:bg-zinc-800'>
      <LocaleSwitcher />
      <Template />
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
    </main>
  );
}
