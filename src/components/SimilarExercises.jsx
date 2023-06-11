/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loading from "./Loading";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "10px" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loading />
        )}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that target the same equipment
      </Typography>

      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loading />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
