import Axy from "axios";

export default class BloggerApiService {
  _BASE_ = "https://dummyapi.io/data/api/";
  _HEADERS_ = { API_ID: { "app-id": "5fdbbbd684917e19e76ca21f" } };
  _URLS_ = {
    _POSTS_: this._BASE_ + "post/",
    _USERS_: this._BASE_ + "user/",
    _COMMENTS_: this._BASE_ + "comment/",
  };

  getRequest = async(request, headers) => {
    try {
      return await Axy.get(request, {
        headers: headers.API_ID,
      });
    } catch (err) {
      throw  JSON.stringify(err);
    }
  };

  getPosts = async () => {
    return this.getRequest(this._URLS_._POSTS_, this._HEADERS_);
  };

  getUsers = async() => {
    return this.getRequest(this._URLS_._USERS_, this._HEADERS_);
  };

  getComments = async() => {
    return this.getRequest(this._URLS_._USERS_, this._HEADERS_);
  };
}
