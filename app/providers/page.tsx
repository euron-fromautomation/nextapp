"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { getProviders } from "@/lib/utils";
import { Search } from "lucide-react";

export default function ProvidersPage() {
  const providers = getProviders();
  const [search, setSearch] = useState("");
  const [medicationFilter, setMedicationFilter] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [medDropdownOpen, setMedDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const filteredProviders = providers
    .filter((provider) =>
      provider.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((provider) => {
      if (!medicationFilter) return true;
      if (medicationFilter === "Mounjaro") return provider.mounjaro_price > 0;
      if (medicationFilter === "Wegovy") return provider.wegovy_price > 0;
      return true;
    })
    .sort((a, b) => {
      if (!sortPrice) return 0;
      const priceA =
        medicationFilter === "Wegovy"
          ? a.wegovy_price
          : a.mounjaro_price || 0;
      const priceB =
        medicationFilter === "Wegovy"
          ? b.wegovy_price
          : b.mounjaro_price || 0;

      return sortPrice === "asc" ? priceA - priceB : priceB - priceA;
    });

  const getCQCColor = (status: string) =>
    status === "Approved"
      ? "bg-green-500 text-white"
      : "bg-gray-400 text-white";

  return (
    <main className="min-h-screen py-10 px-4 sm:px-8 lg:px-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
        GLP-1 Providers
      </h1>

      {/* Filters Section */}
      <div className="flex flex-row flex-wrap items-center justify-between gap-3 mb-8 z-50">
        {/* 🔍 Search */}
        <div className="relative flex-shrink-0 w-36 sm:w-50 lg:w-50 z-50">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          />
          <Input
            placeholder="Search providers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 bg-white dark:bg-gray-800 
                       dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 
                       shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* 💊 Dropdown Filters */}
        <div className="flex flex-row flex-wrap gap-3 flex-shrink-0 z-50">
          {/* Medication Filter */}
          <div className="relative min-w-[120px] sm:w-44 z-50">
            <button
              onClick={() => setMedDropdownOpen(!medDropdownOpen)}
              className="w-full h-10 pl-3 pr-8 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 flex justify-between items-center"
            >
              {medicationFilter || "All Medications"}
              <span> ▼</span>
            </button>

            {medDropdownOpen && (
              <ul className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg z-50">
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter(""); setMedDropdownOpen(false); }}
                >
                  All Medications
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter("Mounjaro"); setMedDropdownOpen(false); }}
                >
                  Mounjaro
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter("Wegovy"); setMedDropdownOpen(false); }}
                >
                  Wegovy
                </li>
              </ul>
            )}
          </div>

          {/* Sort by Price */}
          <div className="relative min-w-[120px] sm:w-44 z-50">
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className="w-full h-10 pl-3 pr-8 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 flex justify-between items-center"
            >
              {sortPrice === "asc" ? "Lowest → Highest " : sortPrice === "desc" ? "Highest → Lowest " : "Sort Price "}
              <span> ▼</span>
            </button>

            {sortDropdownOpen && (
              <ul className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg z-50">
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setSortPrice("asc"); setSortDropdownOpen(false); }}
                >
                  Lowest → Highest
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setSortPrice("desc"); setSortDropdownOpen(false); }}
                >
                  Highest → Lowest
                </li>

              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                Name
              </TableCell>
              {(!medicationFilter || medicationFilter === "Mounjaro") && (
                <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                  Mounjaro
                </TableCell>
              )}
              {(!medicationFilter || medicationFilter === "Wegovy") && (
                <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                  Wegovy
                </TableCell>
              )}
              <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                Rating
              </TableCell>
              <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                CQC
              </TableCell>
              <TableCell className="font-semibold text-left px-4 py-3 text-gray-800 dark:text-gray-100">
                Link
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredProviders.map((provider) => (
              <TableRow
                key={provider.name}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
              >
                <TableCell className="px-4 py-3 font-medium text-gray-700 dark:text-gray-100">
                  {provider.name}
                </TableCell>

                {(!medicationFilter || medicationFilter === "Mounjaro") && (
                  <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    £{provider.mounjaro_price || "-"}
                  </TableCell>
                )}

                {(!medicationFilter || medicationFilter === "Wegovy") && (
                  <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    £{provider.wegovy_price || "-"}
                  </TableCell>
                )}

                <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {/* Numeric rating for mobile */}
                  <span className="sm:hidden">{provider.rating.toFixed(1)}</span>

                  {/* Stars for PC */}
                  <div className="hidden sm:flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gray-400 dark:text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                    ))}
                  <span>{provider.rating.toFixed(1)}</span>

                  </div>
                </TableCell>


                <TableCell className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCQCColor(
                      provider.cqc_status
                    )}`}
                  >
                    {provider.cqc_status}
                  </span>
                </TableCell>

                <TableCell className="px-4 py-3">
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 rounded-xl bg-gray-200 text-gray-800 
                               dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-800 hover:text-white 
                               transition-colors font-medium text-sm shadow-sm"
                  >
                    Visit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
