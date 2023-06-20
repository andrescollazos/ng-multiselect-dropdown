import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'multiSelectFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {

    private separationCode = ';;;;';

    transform(items: ListItem[], filter: ListItem): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        let filterR = items.filter((item: ListItem) => this.applyFilter(item, filter));
        return filterR;
    }

    applyFilter(item: ListItem, filter: ListItem): boolean {
        let text = item.text ? this.clStr(item.text) : '';
        let filters = filter.text ?
            filter.text.toString().split(this.separationCode).map(t => this.clStr(t))
            : [];
        return !((filters.length ? true : false) && item.text && filters.some(f => text.indexOf(f) === -1));
    }

    clearUnicode(str: string) {
        return str.replace(/\\u[\dA-F]{4}/gi, match => String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16)));
    }

    cleanDiacritics(str: string) {
        return str.normalize('NFD')
            .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
            .normalize();
    }

    clStr(str: any) {
        return str ? this.cleanDiacritics(this.clearUnicode(str.toString().toLowerCase())).trim() : '';
    }

}
