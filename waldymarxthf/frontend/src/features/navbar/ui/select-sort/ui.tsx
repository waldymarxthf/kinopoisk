import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { selectSortData } from "./constants";
import { useStyles } from "./ui.styles";
import { useDispatch } from "react-redux";
import { selectSort } from "~features/navbar/model/slice";

export function SelectSort() {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  return (
    <Select
      label="Сортировать по:"
      placeholder="Выберите один"
      rightSection={<IconChevronDown size="1rem" />}
      mt="15px"
      onChange={(value) => dispatch(selectSort(value))}
      defaultValue="votes.kp"
      transitionProps={{ duration: 150, transition: "scale", timingFunction: "ease" }}
      data={selectSortData}
      classNames={{ item: classes.item, rightSection: classes.rightSection }}
    />
  );
}
