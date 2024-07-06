import { useTranslations } from "next-intl";
import { LocaleToggle } from "@/components/locale-toggler";
import { ModeToggle } from "@/components/theme-toggler";

function Header() {
  const t = useTranslations();

  return (
    <header className="z-10 flex justify-between items-center w-11/12 max-w-5xl font-mono text-sm">
      <ModeToggle />
      <h1>{t("title")}</h1>
      <LocaleToggle />
    </header>
  );
}

export { Header };
