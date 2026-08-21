"use client"

import { motion } from "framer-motion"
import {
  Activity,
  ChevronRight,
  Circle,
  Cpu,
  Terminal,
} from "lucide-react"

const terminalLines = [
  {
    prompt: "PS C:\\Users\\suman>",
    command: "Get-ComputerInfo",
  },
  {
    output: "Endpoint Management & Intune Specialist",
  },
  {
    output: "Microsoft Intune       : Connected",
  },
  {
    output: "Entra ID                : Healthy",
  },
  {
    output: "Autopilot               : Operational",
  },
  {
    output: "Configuration Manager   : Operational",
  },
]

export function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#080b10]/95 shadow-2xl"
    >
      {/* Terminal header */}
      <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.025] px-4">
        <div className="flex items-center gap-2">
          <Circle className="h-2.5 w-2.5 fill-current text-red-400/80" />
          <Circle className="h-2.5 w-2.5 fill-current text-yellow-400/80" />
          <Circle className="h-2.5 w-2.5 fill-current text-green-400/80" />
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-white/35">
          <Terminal className="h-3.5 w-3.5" />
          powershell
        </div>

        <div className="w-12" />
      </div>

      {/* Terminal body */}
      <div className="min-h-[300px] p-5 font-mono text-xs leading-7 sm:text-sm">
        <div className="mb-5 flex items-center gap-2 text-white/40">
          <Activity className="h-4 w-4" />
          <span>endpoint://management-console</span>
        </div>

        {terminalLines.map((line, index) => (
          <motion.div
            key={`${line.prompt ?? line.output}-${index}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.35 + index * 0.09,
            }}
            className="min-h-7"
          >
            {line.prompt ? (
              <div className="flex flex-wrap gap-x-2">
                <span className="text-emerald-400">
                  {line.prompt}
                </span>
                <span className="text-white/80">
                  {line.command}
                </span>
              </div>
            ) : (
              <div className="pl-0 text-white/55">
                {line.output}
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="mt-3 flex items-center gap-2"
        >
          <ChevronRight className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400">READY</span>
          <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-emerald-400/80" />
        </motion.div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-white/30">
        <div className="flex items-center gap-2">
          <Cpu className="h-3 w-3" />
          <span>Systems online</span>
        </div>

        <span>4.5 YOE</span>
      </div>
    </motion.div>
  )
}
