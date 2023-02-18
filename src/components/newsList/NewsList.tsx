import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { fetchNews, deleteNews } from "../../store/NewsSlice";
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const NewsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news, hasMore } = useSelector((state: RootState) => state.news);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   setPage(1);
  //   dispatch(fetchNews(page));
  // }, []);

  // useEffect(() => {
  //   // setPage(1);
  //   dispatch(fetchNews(page));
  // }, [page]);
  useMemo(() => {
    dispatch(fetchNews(page));
  }, [page]);

  // useMemo(() => dispatch(fetchNews(page)), []);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleDeleteNews = (id: number) => {
    dispatch(deleteNews(id));
  };
  console.log(news);
  return (
    <Container sx={{ marginTop: 15 }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 5, md: 10 }}>
        {news.map((item) => (
          <Grid sx={{}} item xs={5} key={item.id}>
            <Card
              variant="elevation"
              sx={{
                width: "100%",
                height: "100%",
                padding: 3,
                backgroundColor: "#addeec",
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography sx={{ textTransform: "uppercase" }} variant="h4">
                  {item.title}
                </Typography>
                <Typography>{item.body}</Typography>
              </Grid>
              <Button
                variant="outlined"
                sx={{
                  marginTop: 3,
                  width: "100%",
                  bottom: 0,
                  padding: 1,
                  backgroundColor: "#fff",
                }}
                onClick={() => handleDeleteNews(item.id)}
              >
                Delete
              </Button>
              {/* <IconButton>
                <Delete />
              </IconButton> */}
            </Card>
          </Grid>
        ))}
        {hasMore && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default NewsList;
