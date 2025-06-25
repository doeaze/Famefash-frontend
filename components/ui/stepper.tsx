"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface StepperProps {
  steps: Array<{ title: string; label: string }>
  currentStep: number
  onStepChange: (step: number) => void
}

export function Stepper({ steps, currentStep, onStepChange }: StepperProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isActive = index === currentStep

          return (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative">
              {/* Line */}
              {index < steps.length - 1 && (
                <div
                  className="absolute top-4 left-2 w-full h-[2px] bg-gray-300 z-0"
                  style={{ transform: "translateX(50%)", zIndex: 0 }}
                />
              )}

              {/* Circle */}
              <div
                className={cn(
                  "w-8 h-8 z-10 rounded-full border-2 flex items-center justify-center text-sm font-medium",
                  isCompleted
                    ? "bg-[#844416] text-white border-[#844416]"
                    : isActive
                    ? "bg-[#844416] text-white border-[#844416]"
                    : "bg-white text-gray-400 border-gray-300"
                )}
              >
                {isCompleted ? <Check size={16} /> : index + 1}
              </div>

              {/* Step Label */}
              <span className="text-xs text-muted-foreground mt-2">Step {index + 1}</span>
              <p
                className={cn(
                  "text-sm font-medium",
                  isActive ? "text-[#844416]" : "text-gray-600"
                )}
              >
                {step.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => onStepChange(currentStep - 1)}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() => onStepChange(currentStep + 1)}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  )
}
