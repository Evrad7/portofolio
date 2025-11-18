"use client"

import ProjectItem from '@/components/ProjectItem'
import Title from '@/components/Title'
import projects from '@/data/projects'
import { useCallback, useMemo, useRef, useState } from 'react'


export type ProjectStateType = ("open" | "close" | null)

const Projects = () => {

  const [open, setOpen] = useState<number | null>(null)
  const [close, setClose] = useState<number | null>(null)
  const nextOpen = useRef<number | null>(null)

  const toggleStateProject = useCallback((projectId:number) =>{
     setOpen((prevOpen) => {
      if(prevOpen === null){
        // no project is opened, open one
          nextOpen.current = null
          return projectId
      }
      else if(prevOpen === projectId){
      // a project is opened, close it
        setClose(projectId)
        nextOpen.current = null
        return null
      }
      else{
      // one project is opened, close it on open new project
        setClose(prevOpen)
        nextOpen.current = projectId
        return null
      }
     })
     
      }, [])

  const onCloseComplete = useCallback(() => {
     if(nextOpen.current !== null){
        setOpen(nextOpen.current)
        setClose(null)
        nextOpen.current = null
     }
  
  }, [])

  const setProjectState = useCallback((index: number): ProjectStateType =>{
      if(index === open) return "open"
      else if(index === close) return "close"
      return null
  }, [close, open])

  return (
    <section  className='py-5  sm:pt-7 lg:pt-10  sm:pb-7 lg:pb-20 xl:pb-30  relative before:hidden  before:absolute before:inset-0  before:opacity-15 md:before:opacity-25 before:bg-[url(/big-shadow.png)] before:bg-size-[500%_100%] before:bg-[0%_20%] before:bg-no-repeat'>
      <Title text='Quelques projets' className='mb-4 sm:mb-7 2xl:mb-22 ' />
      <div>
        {projects.map((item, index) => (
          <div key = {index}>
            <ProjectItem id = {index} data={item} state = {setProjectState(index)}  toggleStateProject={toggleStateProject} onCloseComplete = {onCloseComplete}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects