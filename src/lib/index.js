export const bind = (en, fn, o) => (o.addEventListener(en, fn))

export const unbind = (en, fn, o) => (o.removeEventListener(en, fn)) 
