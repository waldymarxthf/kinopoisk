import { Grid } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FilmCard from "./film-card";
import FilmSkeletonCards from "./film-skeleton-cards";
import { RootState, useAppDispatch } from "~app/store/store";
import { fetchFilms } from "../model/api";

export function FilmGallery() {
  const sort = useSelector((state: RootState) => state.filter.sort);
  const page = useSelector((state: RootState) => state.filter.page);
  const films = useSelector((state: RootState) => state.filmsData.films);
  const isLoading = useSelector((state: RootState) => state.filmsData.isLoading);
  const genres = useSelector((state: RootState) => state.filter.genres);
  const year = useSelector((state: RootState) => state.filter.year);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilms({ sort, page, year, genres }));
  }, [sort, page, dispatch, year, genres]);

  return (
    <>
      {isLoading ? (
        <FilmSkeletonCards count={10} />
      ) : (
        <Grid>
          {films.map((item, index) => (
            <FilmCard key={index} {...item} />
          ))}
        </Grid>
      )}
    </>
  );
}
