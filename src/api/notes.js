import { useQuery } from "react-query";
import URLS from "../config/constants/url";

const useGetNotes = () =>
  useQuery("notes", () => fetch(URLS.FAKE_API).then((res) => res.json()));

export default useGetNotes;