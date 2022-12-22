import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatPictures } from "../../store/cataas/actions";

export const Cataas = () => {
  const dispatch = useDispatch(); // позволяет нам вызывать какие-либо экшены(добавление, получение чего либо c api)
  const { pictures, status, error } = useSelector((state) => state?.cataas); // позволяет обращаться к стору (редуху)

  useEffect(() => {
    dispatch(getCatPictures());
  }, [dispatch]);

  const handleGetPicture = () => dispatch(getCatPictures());

  return (
    <div>
      <h1>cataas</h1>
      Статус: {status}
      <Button onClick={handleGetPicture}>Получить еще картинки</Button>
      {status === "fetching" ? (
        <span>Загрузка...</span>
      ) : status === "success" ? (
        pictures.map((picture, index) => <img key={index} src={picture} alt="" />)
      ) : (
        <h3 style={{ color: "red" }}>{error}</h3>
      )}
    </div>
  );
};
