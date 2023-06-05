/* eslint-disable react/prop-types */
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utilities/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [query, setQuery] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handlerSearch = async () => {
    console.log(query);

    if (query) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(query) ||
          exercise.target.toLowerCase().includes(query) ||
          exercise.equipment.toLowerCase().includes(query) ||
          exercise.bodyPart.toLowerCase().includes(query)
      );

      setQuery("");
      setExercises(searchedExercises);
      console.log(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises you <br /> Should Know
      </Typography>

      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="72px"
      >
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
            },
            width: { lg: "65%", xs: "350px" },
            backgroundColor: "#FFFFFF",
          }}
          heigth="76px"
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
        />

        <Button
          className="search-btn"
          sx={{
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            borderRadius: "4px",
            height: "56px",
          }}
          disabled={query ? false : true}
          onClick={handlerSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
