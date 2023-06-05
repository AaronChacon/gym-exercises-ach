import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const SearchExercises = () => {
  const [query, setQuery] = useState("");

  const handlerSearch = async () => {
    console.log(query);

    // if(query) {
    // }
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
    </Stack>
  );
};

export default SearchExercises;
