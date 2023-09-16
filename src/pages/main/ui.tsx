import { NavbarFilmsFilter } from "../../widgets/navbar-filters/ui";
import { FilmGallery } from "~widgets/films-gallery";
import { Title } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSession } from "~shared/model/session/api";
import { RootState, useAppDispatch } from "~app/store/store";

export function Main() {
  const dispatch = useAppDispatch();
  const session = useSelector((state: RootState) => state.session.session);

  useEffect(() => {
    dispatch(fetchSession());
  }, [dispatch]);

  if (!session) return <Title align="center">Для просмотра фильма необходимо авторизоваться</Title>;
  return (
    <>
      <NavbarFilmsFilter />
      <FilmGallery />
    </>
  );
}
