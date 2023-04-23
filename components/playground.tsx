'use client'

import { useRef, useState } from 'react'
import theme from '@/assets/themes/proxima-sandpack-theme.json'
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackFiles,
  SandpackPredefinedTemplate,
  SandpackPreview,
  SandpackProvider,
  SandpackTheme,
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react'
import { SandpackConsoleRef } from '@codesandbox/sandpack-react/components/Console/SandpackConsole'

import siteConfig from '@/config/site'
import Block from '@/components/svgs/block'
import Code from '@/components/svgs/code'
import Launch from '@/components/svgs/launch'
import PlayArrow from '@/components/svgs/play-arrow'
import PlayCircle from '@/components/svgs/play-circle'
import Refresh from '@/components/svgs/refresh'
import Terminal from '@/components/svgs/terminal'

export type PlaygroundMode = 'both' | 'preview'

export default function Playground({
  mode = 'both',
  template = 'react',
  files,
}: {
  mode?: PlaygroundMode
  template: SandpackPredefinedTemplate
  files?: SandpackFiles
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
      <SandpackProvider
        template={template}
        theme={theme as SandpackTheme}
        files={files}
        options={{
          bundlerURL: siteConfig.sandpack.bundler,
          bundlerTimeOut: siteConfig.sandpack.timeout,
        }}
      >
        {mode === 'both' && <PlaygroundEditor />}
        <PlaygroundPreview />
      </SandpackProvider>
    </div>
  )
}

function PlaygroundTabs() {
  const {
    sandpack: { activeFile, setActiveFile, visibleFiles },
  } = useSandpack()

  return (
    <div className="bg-[#1f2629] text-sm">
      {visibleFiles.map((file) => (
        <button
          key={file}
          className={`px-4 py-2 ${
            file === activeFile ? 'bg-[#242d2f] text-white' : 'text-slate-500'
          }`}
          onClick={() => setActiveFile(file)}
          data-active={file === activeFile}
        >
          {file}
        </button>
      ))}
    </div>
  )
}

function PlaygroundEditor() {
  const {
    sandpack: { resetAllFiles },
  } = useSandpack()

  return (
    <>
      <div className="flex items-center justify-between bg-slate-800 p-2 text-sm text-slate-200">
        <div className="flex items-center gap-2 px-2 py-1">
          <Code className="h-5 w-5" />
          <div>Playground</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1 rounded p-1 text-slate-300 duration-200 hover:bg-slate-700 hover:text-white"
            onClick={resetAllFiles}
          >
            <PlayCircle className="h-4 w-4" />
            <div>Reset</div>
          </button>
          <UnstyledOpenInCodeSandboxButton className="flex items-center gap-1 rounded p-1 text-slate-300 duration-200 hover:bg-slate-700 hover:text-white">
            <Launch className="h-4 w-4" />
            <div>Fork</div>
          </UnstyledOpenInCodeSandboxButton>
        </div>
      </div>
      <PlaygroundTabs />
      <SandpackCodeEditor showTabs={false} className="min-h-[240px]" />
    </>
  )
}

function PlaygroundPreview() {
  const [tab, setTab] = useState<'preview' | 'console'>('preview')
  const consoleRef = useRef<SandpackConsoleRef | null>(null)
  const { refresh } = useSandpackNavigation()

  const clearConsole = () => {
    consoleRef.current?.reset()
  }

  return (
    <>
      <div className="flex items-center justify-between bg-slate-800 p-2 text-sm text-slate-200">
        <div className="flex items-center gap-2">
          <button
            className={`px-2 py-1 ${
              tab === 'preview'
                ? 'bg-slate-600 text-white'
                : 'bg-transparent text-slate-500'
            } flex items-center gap-2 rounded`}
            onClick={() => setTab('preview')}
          >
            <PlayArrow className="h-5 w-5" />
            <div>Preview</div>
          </button>
          <button
            className={`px-2 py-1 ${
              tab === 'console'
                ? 'bg-slate-600 text-white'
                : 'bg-transparent text-slate-500'
            } flex items-center gap-2 rounded`}
            onClick={() => setTab('console')}
          >
            <Terminal className="h-5 w-5" />
            <div>Console</div>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {tab === 'preview' && (
            <button
              className="flex items-center gap-1 rounded p-1 text-slate-300 duration-200 hover:bg-slate-700 hover:text-white"
              onClick={refresh}
            >
              <Refresh className="h-4 w-4" />
              <div>Refresh</div>
            </button>
          )}
          {tab === 'console' && (
            <button
              className="flex items-center gap-1 rounded p-1 text-slate-300 duration-200 hover:bg-slate-700 hover:text-white"
              onClick={clearConsole}
            >
              <Block className="h-4 w-4" />
              <div>Clear</div>
            </button>
          )}
        </div>
      </div>
      <div className="h-60 max-h-[240px]">
        <div className={`${tab === 'preview' ? 'block' : 'hidden'}`}>
          <SandpackPreview
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            className="min-h-[240px]"
          />
        </div>
        <div className={`${tab === 'console' ? 'block' : 'hidden'}`}>
          <SandpackConsole className="min-h-[240px]" ref={consoleRef} />
        </div>
      </div>
    </>
  )
}
