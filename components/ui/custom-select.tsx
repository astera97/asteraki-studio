"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const selectRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setHighlightedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && optionsRef.current) {
      const highlightedElement = optionsRef.current.children[highlightedIndex] as HTMLElement
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: "nearest" })
      }
    }
  }, [highlightedIndex, isOpen])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
        event.preventDefault()
        setIsOpen(true)
        setHighlightedIndex(0)
      }
      return
    }

    switch (event.key) {
      case "Escape":
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
      case "ArrowDown":
        event.preventDefault()
        setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        event.preventDefault()
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1))
        break
      case "Enter":
        event.preventDefault()
        if (highlightedIndex >= 0) {
          onChange(options[highlightedIndex].value)
          setIsOpen(false)
          setHighlightedIndex(-1)
        }
        break
      case "Tab":
        setIsOpen(false)
        setHighlightedIndex(-1)
        break
    }
  }

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue)
    setIsOpen(false)
    setHighlightedIndex(-1)
  }

  const handleOptionMouseEnter = (index: number) => {
    setHighlightedIndex(index)
  }

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <div
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          <div ref={optionsRef} role="listbox">
            {options.map((option, index) => (
              <div
                key={option.value}
                className={`px-4 py-3 cursor-pointer transition-colors duration-150 flex items-center justify-between ${
                  highlightedIndex === index
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                } ${option.value === value ? "bg-gray-100" : ""}`}
                onClick={() => handleOptionClick(option.value)}
                onMouseEnter={() => handleOptionMouseEnter(index)}
                role="option"
                aria-selected={option.value === value}
              >
                <span>{option.label}</span>
                {option.value === value && <Check className="w-4 h-4 text-orange-500" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
