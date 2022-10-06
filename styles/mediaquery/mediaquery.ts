export enum breakPoint {
    mobileP,
    mobileL,
    tabletP,
    tabletL,
    laptop,
    desktop,
}
const breakpoints = [320, 568, 768, 1024, 1366, 1680];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);