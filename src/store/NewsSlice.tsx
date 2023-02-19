import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface NewsState {
  news: News[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  hasMore: boolean;
  currentPage: number;
}

export interface News {
  id: number;
  title: string;
  body: string;
}

const initialState: NewsState = {
  news: [],
  status: "idle",
  error: null,
  hasMore: true,
  currentPage: 1,
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (page: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
    );
    const data = await response.json();

    return data;
  }
);

export const deleteNews = createAsyncThunk(
  "news/deleteNews",
  async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news.push(...action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(deleteNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = state.news.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export const { setCurrentPage } = NewsSlice.actions;

export default NewsSlice.reducer;
