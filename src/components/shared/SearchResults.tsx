import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProp = {
  isSearchFetching: boolean;
  searchedPosts: Models.DocumentList<Models.Document> | undefined;
};

export default function SearchResults({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProp) {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
}
