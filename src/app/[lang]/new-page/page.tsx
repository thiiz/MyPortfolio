import { LangProps } from "@/@types/LangProps";
import { SetupView } from "@/components/home/SetupView";

interface PageProps {
  params: Promise<{
    lang: LangProps;
  }>;
}

export default async function NewPage(props: PageProps) {
  const params = await props.params;
  const { lang } = params;

  return (
    <main className="w-full min-h-screen">
      <SetupView />
    </main>
  );
}