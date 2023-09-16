import { NavbarFilmsFilter } from "../../widgets/navbar-filters/ui";
import { FilmGallery } from "~widgets/films-gallery";
import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { supabase } from "~shared/lib/supabase";
import { Session } from "@supabase/gotrue-js";

export function Main() {
  const [session, setSession] = useState<Session | null>(null);
  console.log("🚀 ~ file: ui.tsx:9 ~ Main ~ session:", session);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) return <Title align="center">Для просмотра фильма необходимо авторизоваться</Title>;
  return (
    <>
      <NavbarFilmsFilter />
      <FilmGallery />
    </>
  );
}
