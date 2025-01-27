import { useEffect, useMemo } from "react";
import { useCompaniesApi } from "../hooks/use-companies-api";
import { IndustryGroup } from "../models";
import { groupCompaniesByIndustry } from "../utils";
import { IndustryCard } from "./industry-card";

export const IndustriesList = () => {
  const { companies, loading, fetchCompanies, error } = useCompaniesApi();

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const industryGroups: IndustryGroup[] = useMemo(
    () => groupCompaniesByIndustry(companies),
    [companies],
  );

  return (
    <>
      {loading && <span className="text-white">Loading...</span>}
      {error && <span className="text-red-500">{error}</span>}
      {!!industryGroups.length && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {industryGroups.map(({ industry, companies }) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              companies={companies}
            />
          ))}
        </div>
      )}
    </>
  );
};
