export function buildRoutePath(path){
const routeParamentersRegex = /:([a-zA-Z]+)/g

return new RegExp(array.from(path.matchAll(routeParamentersRegex)))
}