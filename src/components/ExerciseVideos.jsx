/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exercisesVideos, name }) => {
  if (!exercisesVideos?.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {" "}
          {name}{" "}
        </span>
        exercise videos
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        width="100%"
        minHeight="200px"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exercisesVideos?.slice(1, 4).map((item, index) => (
          <a
            key={`${item} - ${index}`}
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item?.video?.title} />

            <Box>
              <Typography variant="h5" color="#000">
                {item?.video?.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item?.video?.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
