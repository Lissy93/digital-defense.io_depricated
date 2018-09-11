/**
 * This class stores the tree structure for navbar item groups
 * @author Alicia Sykes
 */


import NavBarItem from './NavBarItem';

export default class NavBarItems {
    private theNavBarItems: NavBarItem[];

    constructor(theNavBarItems?: any) {
        this.theNavBarItems = theNavBarItems || [];
    }

    public makeTheFuckingNavbar(navData: any) {
        const theFuckingNavBar: NavBarItem[] = [];
        for (const navDataItem of navData) {
            const children = (navDataItem.children.length > 0) ?
                this.makeTheFuckingNavbar(navDataItem.children) : [];
            theFuckingNavBar.push(this.makeItem(navDataItem, children));
        }
        return theFuckingNavBar;
    }

    private makeItem(record: any, children: NavBarItem[]) {
        return new NavBarItem(record.name, record.path, children);
    }

}
