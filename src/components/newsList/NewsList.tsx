import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { fetchNews, deleteNews, setCurrentPage } from "../../store/NewsSlice";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Delete } from "@mui/icons-material";

const NewsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { news, hasMore, currentPage } = useSelector(
    (state: RootState) => state.news
  );
  // const [page, setPage] = useState(1);

  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchNews(1));
    }
  }, []);

  const handleLoadMore = async () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchNews(currentPage + 1));
  };

  const handleDeleteNews = (id: number) => {
    dispatch(deleteNews(id));
  };
  return (
    <Container sx={{ paddingY: 10, textAlign: "center", margin: "0 auto" }}>
      <Typography mb={5} variant="h5" color="GrayText">
        Новини
      </Typography>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 3, sm: 3, md: 7 }}>
        {news.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Card
              variant="elevation"
              sx={{
                width: "100%",
                height: "100%",
                padding: 4,
                backgroundColor: "#addeec",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid
                container
                // sx={{ display: "flex" }}
                justifyContent="space-between"
                alignItems="center"
                flexDirection="column"
              >
                <Typography sx={{ textTransform: "uppercase" }} variant="h4">
                  {item.title}
                </Typography>
                <Typography mt={2}>{item.body}</Typography>
              </Grid>
              <Button
                variant="contained"
                color="error"
                fullWidth
                sx={{
                  marginTop: 3,

                  paddingY: 2,
                }}
                onClick={() => handleDeleteNews(item.id)}
                startIcon={<DeleteIcon />}
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
              onClick={() => handleLoadMore()}
              sx={{
                paddingX: 4,
                fontSize: "1.3rem",
              }}
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
