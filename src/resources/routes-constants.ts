//TODO: make it to check /pages/*.* and generate paths with
/**
 * Now it's 
 * 1 - create file in /pages/ *Page.tsx
 * 2 - add *:'*' in here
 * 3 - name a component in file * as *
 * 4 - import it as * in RootComponent.tsx
 * 5 - add route to * in RootComponent
 * 6 - add link if necessary in HeaderNav or other links list
 */
// lowercase names automatically
export const ROUTES = {
    INDEX_ROUTE: '',
    ENGINEERING: 'engineering',
    MANUFACTURING: 'manufacturing',
    SOURCING: 'sourcing',
    MATERIALS: 'materials',
    BOM: 'bom',
    SPAREPARTS: 'spareparts',
    EQUIPMENT: 'equipment',
}