import { Button, ButtonProps } from "@mantine/core";
import { supabase } from "~shared/lib/supabase";
import GoogleIcon from "~shared/ui/google-button";

export function LoginGoogleButton(props: ButtonProps) {
  const loginHandler = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <Button
      onClick={loginHandler}
      leftIcon={<GoogleIcon />}
      radius="xl"
      variant="default"
      color="gray"
      {...props}
    />
  );
}
