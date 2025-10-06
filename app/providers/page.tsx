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

export default function ProvidersPage() {
  const providers = getProviders();
  const [search, setSearch] = useState("");
  const [medicationFilter, setMedicationFilter] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const filteredProviders = providers
    // 🔍 Filter by name
    .filter((provider) =>
      provider.name.toLowerCase().includes(search.toLowerCase())
    )
    // 💊 Filter by medication type (fixed logic)
    .filter((provider) => {
      if (!medicationFilter) return true;
      if (medicationFilter === "Mounjaro") return provider.mounjaro_price > 0;
      if (medicationFilter === "Wegovy") return provider.wegovy_price > 0;
      return true;
    })
    // 💰 Sort by price if selected
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
    <main className="min-h-screen py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-100 tracking-tight">
        GLP-1 Providers
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        {/* Search */}
        <Input
          placeholder="Search providers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 text-sm rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition"
        />

        {/* Dropdown Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Medication Filter */}
          <div className="relative w-full sm:w-48">
            <select
              value={medicationFilter}
              onChange={(e) => setMedicationFilter(e.target.value)}
              className="appearance-none w-full h-11 pl-4 pr-10 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition cursor-pointer"
            >
              <option value="">All Medications</option>
              <option value="Mounjaro">Mounjaro</option>
              <option value="Wegovy">Wegovy</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              ▼
            </span>
          </div>

          {/* Sort by Price */}
          <div className="relative w-full sm:w-48">
            <select
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
              className="appearance-none w-full h-11 pl-4 pr-10 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition cursor-pointer"
            >
              <option value="">Sort by Price</option>
              <option value="asc">Lowest → Highest</option>
              <option value="desc">Highest → Lowest</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              ▼
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
                Name
              </TableCell>
              {(!medicationFilter || medicationFilter === "Mounjaro") && (
                <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
                  Mounjaro Price
                </TableCell>
              )}
              {(!medicationFilter || medicationFilter === "Wegovy") && (
                <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
                  Wegovy Price
                </TableCell>
              )}
              <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
                Rating
              </TableCell>
              <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
                CQC Status
              </TableCell>
              <TableCell className="font-semibold text-left px-5 py-3 text-gray-800 dark:text-gray-100">
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
                <TableCell className="px-5 py-4 font-medium text-gray-700 dark:text-gray-100">
                  {provider.name}
                </TableCell>

                {(!medicationFilter || medicationFilter === "Mounjaro") && (
                  <TableCell className="px-5 py-4 text-gray-700 dark:text-gray-300">
                    £
                    {provider.mounjaro_price
                      ? provider.mounjaro_price
                      : "-"}
                  </TableCell>
                )}

                {(!medicationFilter || medicationFilter === "Wegovy") && (
                  <TableCell className="px-5 py-4 text-gray-700 dark:text-gray-300">
                    £{provider.wegovy_price ? provider.wegovy_price : "-"}
                  </TableCell>
                )}

                <TableCell className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  {provider.rating.toFixed(1)}
                </TableCell>

                <TableCell className="px-5 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCQCColor(
                      provider.cqc_status
                    )}`}
                  >
                    {provider.cqc_status}
                  </span>
                </TableCell>

                <TableCell className="px-5 py-4">
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-800 hover:text-white transition-colors font-medium text-sm shadow-sm"
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
