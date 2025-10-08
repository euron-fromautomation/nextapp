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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getProviders } from "@/lib/utils";
import { Search } from "lucide-react";

export default function ProvidersPage() {
  const providers = getProviders();
  const [search, setSearch] = useState("");
  const [medicationFilter, setMedicationFilter] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [medDropdownOpen, setMedDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // number of providers per page

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

  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);
  const displayedProviders = filteredProviders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getCQCColor = (status: string) =>
    status === "Approved"
      ? "bg-green-500 text-white"
      : "bg-gray-400 text-white";

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-6 px-4 sm:px-8 lg:px-24 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight">
        GLP-1 Providers
      </h1>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 z-50">
        {/* Search */}
        <div className="w-full sm:w-64 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          <Input
            placeholder="Search providers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Medication Dropdown */}
          <div className="relative w-full sm:w-44">
            <button
              onClick={() => {
                setMedDropdownOpen(!medDropdownOpen);
                if (!medDropdownOpen) setSortDropdownOpen(false);
              }}
              className="w-full h-10 pl-3 pr-8 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 flex justify-between items-center"
            >
              {medicationFilter || "All Medications"} <span>▼</span>
            </button>
            {medDropdownOpen && (
              <ul className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg z-50">
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter(""); setMedDropdownOpen(false); setCurrentPage(1); }}
                >
                  All Medications
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter("Mounjaro"); setMedDropdownOpen(false); setCurrentPage(1); }}
                >
                  Mounjaro
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setMedicationFilter("Wegovy"); setMedDropdownOpen(false); setCurrentPage(1); }}
                >
                  Wegovy
                </li>
              </ul>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-44">
            <button
              onClick={() => {
                setSortDropdownOpen(!sortDropdownOpen);
                if (!sortDropdownOpen) setMedDropdownOpen(false);
              }}
              className="w-full h-10 pl-3 pr-8 rounded-xl border border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 flex justify-between items-center"
            >
              {sortPrice === "asc"
                ? "Lowest → Highest"
                : sortPrice === "desc"
                ? "Highest → Lowest"
                : "Sort Price"}{" "}
              <span>▼</span>
            </button>
            {sortDropdownOpen && (
              <ul className="absolute mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg z-50 ">
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setSortPrice("asc"); setSortDropdownOpen(false); setCurrentPage(1); }}
                >
                  Lowest → Highest
                </li>
                <li
                  className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => { setSortPrice("desc"); setSortDropdownOpen(false); setCurrentPage(1); }}
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
        <Table className="min-w-[600px] divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell>Name</TableCell>
              {(!medicationFilter || medicationFilter === "Mounjaro") && <TableCell>Mounjaro</TableCell>}
              {(!medicationFilter || medicationFilter === "Wegovy") && <TableCell>Wegovy</TableCell>}
              <TableCell>Rating</TableCell>
              <TableCell>CQC</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedProviders.map((provider) => (
              <TableRow key={provider.name} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <TableCell>{provider.name}</TableCell>
                {(!medicationFilter || medicationFilter === "Mounjaro") && <TableCell>£{provider.mounjaro_price || "-"}</TableCell>}
                {(!medicationFilter || medicationFilter === "Wegovy") && <TableCell>£{provider.wegovy_price || "-"}</TableCell>}
                <TableCell>
                  <span className="hidden sm:inline">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="text-gray-400">★</span>
                    ))}
                    <span> {provider.rating.toFixed(1)}</span>
                  </span>
                  <span className="inline sm:hidden">{provider.rating.toFixed(1)}</span>
                </TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCQCColor(provider.cqc_status)}`}>
                    {provider.cqc_status}
                  </span>
                </TableCell>
                <TableCell>
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-800 hover:text-white text-sm font-medium"
                  >
                    Visit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => { e.preventDefault(); if (currentPage > 1) setCurrentPage(currentPage - 1); }}
                className={`${currentPage === 1 ? "opacity-50 pointer-events-none" : ""}`}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 1}
                onClick={(e) => { e.preventDefault(); setCurrentPage(1); }}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {currentPage > 3 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => page !== 1 && page !== totalPages && Math.abs(page - currentPage) <= 1)
              .map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => { e.preventDefault(); setCurrentPage(page); }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {currentPage < totalPages - 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={(e) => { e.preventDefault(); setCurrentPage(totalPages); }}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) setCurrentPage(currentPage + 1); }}
                className={`${currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
}
