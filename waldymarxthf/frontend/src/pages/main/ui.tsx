import usePocketBase from "~shared/lib/hooks/pb-hook";
import { NavbarFilmsFilter } from "../../widgets/navbar-filters/ui";
import { FilmGallery } from "~widgets/films-gallery";

export function Main() {
  const { user } = usePocketBase();
  return (
    <>
      {user && (
        <>
          <NavbarFilmsFilter />
          <FilmGallery />
        </>
      )}
    </>
  );
}
