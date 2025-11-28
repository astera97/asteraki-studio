// src/components/CitySearch.tsx
"use client";

import React, { useState, useEffect, useRef, KeyboardEvent } from "react";
import { CITIES, City } from "../data/cities";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

const CitySearch: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedCityId, setSelectedCityId] = useState("");
  const [filteredCities, setFilteredCities] = useState<City[]>(CITIES);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [result, setResult] = useState<City | "not-found" | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Auto-detect city from URL on mount
  useEffect(() => {
    // Extract city ID from URL path like "/boite-de-production-video/paris"
    const pathParts = pathname.split('/');
    const cityId = pathParts[pathParts.length - 1];
    
    if (cityId && cityId !== 'boite-de-production-video') {
      const cityFromUrl = CITIES.find(city => city.id === cityId);
      if (cityFromUrl) {
        // Set all states to reflect this city
        setInput(cityFromUrl.name);
        setSelectedCityId(cityId);
        setResult(cityFromUrl);
      }
    }
  }, [pathname]);

  // Filter cities as user types
  useEffect(() => {
    if (input.trim() === "") {
      setFilteredCities(CITIES);
      setSuggestionsVisible(false);
    } else {
      const matches = CITIES.filter((city) =>
        city.name.toLowerCase().includes(input.trim().toLowerCase())
      );
      setFilteredCities(matches);
      setSuggestionsVisible(matches.length > 0);
      setHighlightedIndex(-1);
    }
  }, [input]);

  const handleSearch = () => {
    const cityFound = CITIES.find(
      (city) => city.name.toLowerCase() === input.trim().toLowerCase()
    );
    setResult(cityFound || "not-found");
    setSuggestionsVisible(false);
  };

  const handleSelectFromList = (city: City) => {
    setInput(city.name);
    setResult(city);
    setSelectedCityId(city.id);
    setSuggestionsVisible(false);
    inputRef.current?.blur();
  };

  const handleSelectFromDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityId = e.target.value;
    setSelectedCityId(cityId);
    
    if (!cityId) {
      setResult(null);
      return;
    }
    
    const selectedCity = CITIES.find((city) => city.id === cityId);
    if (selectedCity) {
      setInput(selectedCity.name);
      setResult(selectedCity);
      setSuggestionsVisible(false);
    }
  };

  // Keyboard navigation in suggestions
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!suggestionsVisible) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredCities.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && filteredCities[highlightedIndex]) {
        handleSelectFromList(filteredCities[highlightedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setSuggestionsVisible(false);
    }
  };

  const clearSelection = () => {
    setInput("");
    setSelectedCityId("");
    setResult(null);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {result && result !== "not-found" 
                ? `Notre agence vidéo n'intervient pas uniquement à ${result.name}`
                : "Votre agence de production vidéo spécialisée dans toute la France"
              }
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {result && result !== "not-found" 
                ? `Nous sommes présents à ${result.name} mais également dans de nombreuses autres villes en France. Découvrez notre couverture nationale.`
                : "Découvrez où nos équipes de production vidéo peuvent réaliser votre projet. Et nous ne facturons pas de frais de transport !"
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 max-w-4xl mx-auto">
            {/* Search Input with Autocomplete */}
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setSelectedCityId("");
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => input.trim() && setSuggestionsVisible(true)}
                placeholder="Entrez votre ville..."
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-base"
              />
              {/* Autocomplete Suggestions */}
              {suggestionsVisible && filteredCities.length > 0 && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                  {filteredCities.map((city, index) => (
                    <li
                      key={city.id}
                      onClick={() => handleSelectFromList(city)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`px-5 py-3 cursor-pointer transition ${
                        highlightedIndex === index
                          ? "bg-orange-50 text-orange-700 font-medium"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      {city.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* City Dropdown - Now shows active selection */}
            <div className="relative">
              <select
                value={selectedCityId}
                onChange={handleSelectFromDropdown}
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none text-base font-medium"
              >
                <option value="" className="text-gray-400 font-normal">
                  Ou choisissez dans la liste
                </option>
                {CITIES.map((city) => (
                  <option 
                    key={city.id} 
                    value={city.id}
                    className="text-gray-800 hover:bg-orange-50 py-2"
                  >
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center group shadow-md hover:shadow-lg"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
                />
              </svg>
              Rechercher votre ville
            </button>
          </div>

          {/* Result Card with Clear Option */}
          {result !== null && (
            <div id="city-result" className="max-w-4xl mx-auto mt-8">
              <div className="flex justify-end mb-3">
                <button
                  onClick={clearSelection}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-4 h-4 mr-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Effacer la sélection
                </button>
              </div>
              
              {result !== "not-found" ? (
                <div className="border border-orange-100 rounded-xl p-6 sm:p-7 bg-orange-50">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-100 text-orange-600 font-bold mr-4 mt-1 flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Nous intervenons à {result.name} !
                      </h3>
                      <p className="text-gray-700 mb-5 text-lg">
                        Notre équipe de production vidéo est prête à réaliser votre projet à {result.name}.
                      </p>
                      <Link
                        href={`/boite-de-production-video/${result.id}`}
                        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl transition shadow-md hover:shadow-lg"
                      >
                        <span className="flex items-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-4 h-4 mr-2"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                            />
                          </svg>
                          Découvrir nos services à {result.name}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-xl p-6 sm:p-7 bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 text-gray-600 font-bold mr-4 mt-1 flex-shrink-0">
                      !
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Pas encore disponible à {input.trim() || "cette ville"}
                      </h3>
                      <p className="text-gray-600 mb-5 text-lg">
                        Nos équipes sont actuellement concentrées sur d'autres régions.
                      </p>
                      <a
                        href="mailto:elsir@asterakistudio.com"
                        className="inline-flex items-center bg-white border border-gray-300 hover:border-orange-500 text-orange-600 font-bold px-5 py-3 rounded-xl transition shadow hover:shadow-md"
                      >
                        <span className="flex items-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="w-4 h-4 mr-2"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                            />
                          </svg>
                          Contacter notre équipe
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitySearch;