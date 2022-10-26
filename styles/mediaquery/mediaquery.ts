export enum breakPoint {
    mobile,
    tablet,
}
const breakpoints = [768, 1024];
export const MediaQuery = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);