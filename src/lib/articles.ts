import type { CollectionEntry } from "astro:content";

export type ArticleEntry = CollectionEntry<"articles">;

export interface ArticleCardData {
  slug: string;
  title: string;
  author: string;
  type: "Artículo" | "Reseña";
  source?: string;
  image?: string;
}

export function getArticleSlug(article: ArticleEntry) {
  return article.id;
}

export function toArticleCardData(article: ArticleEntry): ArticleCardData {
  return {
    slug: getArticleSlug(article),
    title: article.data.title,
    author: article.data.author,
    type: article.data.type,
    source: article.data.source,
    image: article.data.image,
  };
}

export function sortArticles(
  firstArticle: ArticleEntry,
  secondArticle: ArticleEntry,
) {
  const firstPublishedAt = firstArticle.data.publishedAt?.getTime();
  const secondPublishedAt = secondArticle.data.publishedAt?.getTime();

  if (firstPublishedAt && secondPublishedAt) {
    return secondPublishedAt - firstPublishedAt;
  }

  if (firstPublishedAt) {
    return -1;
  }

  if (secondPublishedAt) {
    return 1;
  }

  return getArticleSlug(firstArticle).localeCompare(
    getArticleSlug(secondArticle),
    "es",
  );
}
