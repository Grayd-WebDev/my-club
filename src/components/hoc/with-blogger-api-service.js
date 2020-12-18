import React from "react";
import {
  BloggerApiConsumer,
} from "../blogger-api-service-context";

const WithBloggerApiService = () => (Wrapped) => {
  return (props) => {
    return (
      <BloggerApiConsumer>
        {(bloggerApiService) => {
         return <Wrapped {...props} bloggerApiService={bloggerApiService}/>;
        }}
      </BloggerApiConsumer>
    );
  };
};

export default WithBloggerApiService;
