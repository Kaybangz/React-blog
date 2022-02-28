import React, { useState } from "react";
import EmptyList from "../../components/common/Chip/EmptyList/EmptyList";
import { blogList } from "../../config/data";
import BlogItems from "./BlogItems/BlogItems";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const [blogPosts, setBlogPosts] = useState(blogList);

  const [searchKey, setSearchKey] = useState("");

   //Search function
   const handleSearch = (e) => {
    e.preventDefault();

    handleSearchResults();
  };

  //Search for blogposts by category
  const handleSearchResults = () => {
    const allPosts = blogList;

    const filteredPosts = allPosts.filter((post) =>
      post.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogPosts(filteredPosts);
  };

  //Clear Search
  const handleClearSearch = () => {
    setBlogPosts(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Header starts here*/}
      <Header />
      {/* Header ends here */}

      {/* Searchbar starts here */}
      <SearchBar
        searchValue={searchKey}
        clearSearch={handleClearSearch}
        searchSubmit={handleSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {/* Searchbar ends here */}

      {/* Blog items starts here */}
      {!blogPosts.length ? <EmptyList /> : <BlogItems blogs={blogPosts} />}
      {/* Blog items end here */}
    </div>
  );
};

export default Home;
