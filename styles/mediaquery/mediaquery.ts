export enum breakPoint {
    mobile,
    tablet,
    laptop,
}
const breakpoints = [768, 1024,1440];
export const MediaQuery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);