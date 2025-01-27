import { Company, Industry, IndustryGroup } from "./models";

export const groupCompaniesByIndustry = (
  companies: Company[],
): IndustryGroup[] => {
  const sortedCompanies = companies.toSorted((a, b) =>
    a.name.localeCompare(b.name),
  );
  const industryGroups: {
    [key: string]: {
      industry: Industry;
      companiesMap: Map<string, Company>; // preserves sorting order and uniqueness
    };
  } = {};

  for (const company of sortedCompanies) {
    for (const industry of company.industries) {
      if (!industryGroups[industry.id]) {
        industryGroups[industry.id] = {
          industry,
          companiesMap: new Map().set(company.uuid, company),
        };
      }

      if (!industryGroups[industry.id].companiesMap.has(company.uuid)) {
        industryGroups[industry.id].companiesMap.set(company.uuid, company);
      }
    }
  }

  return Object.values(industryGroups)
    .map((group) => ({
      ...group,
      companies: [...group.companiesMap.values()],
    }))
    .toSorted((a, b) => a.industry.name.localeCompare(b.industry.name));
};
