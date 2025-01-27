import { Company, Industry, IndustryGroup } from "./models";

export const groupCompaniesByIndustry = (
  companies: Company[],
): IndustryGroup[] => {
  const industryGroups: {
    [key: string]: {
      industry: Industry;
      companiesMap: Record<string, Company>;
    };
  } = {};

  for (const company of companies) {
    for (const industry of company.industries) {
      if (!industryGroups[industry.id]) {
        industryGroups[industry.id] = {
          industry,
          companiesMap: { [company.uuid]: company },
        };
      }

      if (!industryGroups[industry.id].companiesMap[company.uuid]) {
        industryGroups[industry.id].companiesMap[company.uuid] = company;
      }
    }
  }

  return (
    Object.values(industryGroups)
      .map((group) => ({
        ...group,
        companies: Object.values(group.companiesMap).toSorted((a, b) =>
          a.name.localeCompare(b.name),
        ),
      }))
      // sort industries
      .toSorted((a, b) => a.industry.name.localeCompare(b.industry.name))
  );
};
