import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

export const useFetchApi = (url: string) => {
  const [data, setData] = useState<Todo[]>([]); // Update tipe data
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
