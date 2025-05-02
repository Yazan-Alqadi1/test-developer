import axios from "axios";
import { useDataStore } from "~/stores/data";

export const useUtils = () => {
  // Base url api
  const config = useRuntimeConfig();
  const BASE_URL = config.public.BASE_URL;

  // website data
  const store = useDataStore();

  const router = useRouter();

  return {
    axios,
    BASE_URL,
    router,
    store,
  };
};
