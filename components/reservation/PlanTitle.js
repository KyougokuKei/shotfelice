import { Box } from "../../styles/components";
import { RequiredBox } from "./RequiredBox";

export function PlanTitle({ data, multipleSelect, required }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      fontSize={20}
      fontWeight="bold"
      color="black"
      mt={32}
      mb={24}
    >
      {data.title_jp}
      <Box display="flex" fontSize={15} fontWeight="normal" ml={8} mt={4}>
        {data.title_en}
        {multipleSelect && <MultipleChoice />}
        {<RequiredBox required={required} />}
      </Box>
    </Box>
  );
}

function MultipleChoice() {
  return (
    <Box as="span" ml={8}>
      (複数選択可)
    </Box>
  );
}
