import { useCallback, useState } from "react";
import { Company } from "../models.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useCompaniesApi = () => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/api/companies`);
      const companies = await response.json();
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setCompanies(companies?.items || []);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, companies, error, fetchCompanies };
};
