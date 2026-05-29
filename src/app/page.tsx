import ActiveLabel from "@/app/components/active-label";
import NotActiveLabel from "@/app/components/not-active-label";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-xl">Home Page</h1>
        <ActiveLabel>Active Label</ActiveLabel>
        <NotActiveLabel>Not Active Label</NotActiveLabel>  
      </main>
    </div>
  );
}
