import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducers/rootReducer";
import fetchBlogData from './thunk/blogs/fetchBlogsData';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(fetchBlogData)));
export default store