import { RefObject, useEffect, useState } from 'react'

interface intersectionObserverOptions extends IntersectionObserverInit {} // eslint-disable-line

const DEFAULT_INTERSECTION_OBSERVER_OPTIONS: intersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const useIntersect = (
  nodeRef: RefObject<Element>,
  initFlag: boolean = true,
  options: intersectionObserverOptions = DEFAULT_INTERSECTION_OBSERVER_OPTIONS
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const initEntry = ([entry]: IntersectionObserverEntry[]) => setEntry(entry)

  useEffect(() => {
    const node = nodeRef?.current

    if (!node) return

    const observer = new IntersectionObserver(initEntry, options)
    observer.observe(node)

    return () => observer.disconnect()
  }, [nodeRef, options, initFlag])

  return entry
}
