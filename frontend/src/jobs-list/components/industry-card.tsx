import { Company, Industry } from "../models.ts";
import { CompanyLogo } from "./company-logo.tsx";

export const IndustryCard = ({
  industry,
  companies,
}: {
  industry: Industry;
  companies: Company[];
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 w-full h-[350px] text-zinc-900">
      <div className="flex justify-between text-base font-semibold mb-4">
        <h4 className="capitalize ">{industry.name}</h4>
        <span className="text-gray-600">{companies.length}</span>
      </div>

      <div className="flex justify-between text-gray-600 text-xs mb-2">
        <span>Name</span>
        <span>Total jobs available</span>
      </div>
      <hr className="border-gray-300 mb-3" />

      <div className="flex flex-col gap-3 grow-1 overflow-y-scroll">
        {companies.map((company) => (
          <div key={company.uuid} className="flex gap-2 items-center text-sm">
            <CompanyLogo
              src={company.images["32x32"]}
              alt={company.name}
              className="rounded-xs h-6 w-6"
            />
            <div>{company.name}</div>
            <div className="ml-auto text-gray-600">
              {company.total_jobs_available}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
