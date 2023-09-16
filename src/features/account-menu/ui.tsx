import { Avatar, Group, Menu, Text, UnstyledButton, rem } from "@mantine/core";
import { IconChevronDown, IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useStyles } from "./ui.styles";
import { supabase } from "~shared/lib/supabase";
import { User } from "@supabase/gotrue-js";

export function AccountMenu() {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    (async () => {
      await supabase.auth.getUser().then((value) => {
        if (value.data.user) {
          setUser(value.data.user);
        }
      });
    })();
  }, []);

  const logoutHandler = () => {
    supabase.auth.signOut();
  };

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group spacing={7}>
            <Avatar color="blue" radius="xl" size={26} src={user?.user_metadata.avatar_url} />
            <Text weight={500} size="md" mr={3}>
              {user?.user_metadata.name}
            </Text>
            <IconChevronDown size={rem(12)} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={logoutHandler}
          color="red"
          icon={<IconTrash size="0.9rem" stroke={1.5} />}
        >
          Quit
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
