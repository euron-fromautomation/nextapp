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

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(search.toLowerCase())
  );

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return "bg-green-500 text-white";
    if (rating >= 4.5) return "bg-yellow-400 text-black";
    return "bg-red-500 text-white";
  };

  const getCQCColor = (status: string) => {
    return status === "Approved" ? "bg-green-600 text-white" : "bg-gray-400 text-white";
  };

  return (
    <main className="min-h-screen py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl font-bold text-left mb-8 text-gray-900 dark:text-white">
        GLP-1 Providers
      </h1>

      {/* Search bar */}
      <div className="max-w-sm mb-6">
        <Input
          placeholder="Search by provider name..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="text-sm rounded-md shadow-sm border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <TableHeader className="bg-gray-200 dark:bg-gray-800">
            <TableRow>
              <TableCell className="font-medium text-left px-4 py-2">Name</TableCell>
              <TableCell className="font-medium text-left px-4 py-2">Mounjaro Price</TableCell>
              <TableCell className="font-medium text-left px-4 py-2">Wegovy Price</TableCell>
              <TableCell className="font-medium text-left px-4 py-2">Rating</TableCell>
              <TableCell className="font-medium text-left px-4 py-2">CQC Status</TableCell>
              <TableCell className="font-medium text-left px-4 py-2">Link</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProviders.map((provider) => (
              <TableRow
                key={provider.name}
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer"
              >
                <TableCell className="px-4 py-3 font-semibold">{provider.name}</TableCell>
                <TableCell className="px-4 py-3">£{provider.mounjaro_price}</TableCell>
                <TableCell className="px-4 py-3">£{provider.wegovy_price}</TableCell>
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-gray-400 dark:text-gray-500 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                      {provider.rating.toFixed(1)}
                    </span>
                  </div>
                </TableCell>


                <TableCell className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-sm ${getCQCColor(provider.cqc_status)}`}>
                    {provider.cqc_status}
                  </span>
                </TableCell>
              <TableCell className="px-4 py-3">
  <a
    href={provider.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-sm font-medium shadow-sm"
    title="Visit Provider"
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
