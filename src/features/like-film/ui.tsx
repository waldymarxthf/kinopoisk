import { ActionIcon } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~app/store/store";
import { supabase } from "~shared/lib/supabase";

export function LikeFilm({ id }: { id: number }) {
  const [isLiked, setIsLiked] = useState(false);
  const session = useSelector((state: RootState) => state.session.session);
  const data = {
    film: id,
    user_id: session?.user?.id,
  };

  async function likeToggle() {
    if (isLiked) {
      await supabase.from("favoriteFilms").delete().eq("film", data.film);
    } else {
      await supabase.from("favoriteFilms").insert([data]).select();
    }

    setIsLiked(!isLiked);
  }

  return (
    <ActionIcon key={id} onClick={likeToggle} color="red.6" mt="10px" size="2rem">
      {isLiked ? <IconHeartFilled size="1.2rem" /> : <IconHeart size="1.2rem" />}
    </ActionIcon>
  );
}
