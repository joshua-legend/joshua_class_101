const useMediaQuery = (num: number) => {
    const breakpoints = [320, 768, 1024, 1366, 1680]
    const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
    return mq[num];
}

export default useMediaQuery;