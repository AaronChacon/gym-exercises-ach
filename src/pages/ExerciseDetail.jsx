import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  exerciseOptions,
  fetchData,
  youtubeSearchOptions,
} from "../utilities/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exercisesVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetail?.name}`,
        youtubeSearchOptions
      );

      setExercisesVideos(exercisesVideoData.contents);

      const targetMuscleExercises = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercises);

      const equipmentMuscleExercises = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentMuscleExercises);
    };

    fetchExercisesData();
  }, [exerciseDetail?.name, id]);

  console.log(targetMuscleExercises);
  console.log(equipmentExercises);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exercisesVideos={exercisesVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
