// components
import { useEffect } from "react";
import {
  articlesSelector,
  fetchArticles,
} from "../../redux/slicers/articlesSlice";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../../components/Card";
import StaggerChildren from "../../components/Animate/StaggerChildren";
import { useTranslation } from "react-i18next";
import Article from "../../interfaces/IArticle";
import { Helmet } from "react-helmet";

const Articles = () => {
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const articles = useSelector(articlesSelector).articles;

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch, fetchArticles]);

  return (
    <section className="flex flex-col gap-4">
      <Helmet>
        <title>{t("pages.articles")}</title>
        <meta name="descriptipn" content={t("descriptions.articles")} />
      </Helmet>
      <h1 className="text-text-main text-4xl font-semibold">
        {t("pages.articles").toUpperCase()}
      </h1>
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {articles?.map((article: Article, index: number) => (
          <ArticleCard
            key={index}
            article={article}
            className="p-5 flex flex-col justify-stretch gap-5"
          />
        ))}
      </StaggerChildren>
    </section>
  );
};

export default Articles;
