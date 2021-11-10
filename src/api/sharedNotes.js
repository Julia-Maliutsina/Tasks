import { useQuery } from "react-query";
import URLS from "../config/constants/url";

const useGetSharedNotes = () =>
  useQuery("shared", () => fetch(URLS.FAKE_API).then((res) => res.json()));

export default useGetSharedNotes;
