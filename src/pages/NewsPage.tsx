import React from "react";
import Header from "../components/header/Header";
import NewsList from "../components/newsList/NewsList";

type Props = {};

const NewsPage = (props: Props) => {
  return (
    <>
      <NewsList />
    </>
  );
};

export default NewsPage;
