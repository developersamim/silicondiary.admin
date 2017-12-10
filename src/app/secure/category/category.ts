export interface Category{
    id: number;
    name: string;
    parentId?: number;
    parent?: Category;
    children?: Category[];
    nameOfAllChildren: string;
}