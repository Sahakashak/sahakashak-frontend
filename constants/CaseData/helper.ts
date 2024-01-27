import { Case } from "../../lib/types/case";

export function calculateCaseStats(cases: Case[]) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the first day of the current month
  const firstDayOfCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  // Filter cases that occurred in the last month
  const casesLastMonth = cases?.filter((singleCase) => {
    const caseDate = new Date(singleCase.createdAt);
    return caseDate >= firstDayOfCurrentMonth && caseDate < currentDate;
  });

  // Calculate the percentage increase
  const totalCasesLastMonth = casesLastMonth.length;

  return {
    totalCasesLastMonth,
  };
}
