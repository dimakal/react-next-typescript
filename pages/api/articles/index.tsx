import { articles } from '../../../data'
import {ArticleType} from "../../../types";

export default function handler(req, res): Promise {
  res.status(200).json(articles)
}
