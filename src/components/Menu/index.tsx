import React from "react";
import MenuRoot from "./MenuRoot";
import MenuContent from "./MenuContent";
import MenuBrand from "./MenuBrand";
import MenuToggle from "./MenuToggle";




type MenuWithRoot = typeof MenuRoot & { Root: typeof MenuRoot, Content: typeof MenuContent, Brand: typeof MenuBrand, Toggle: typeof MenuToggle}


const Menu = MenuRoot as MenuWithRoot

Menu.Root = MenuRoot

Menu.Content = MenuContent

Menu.Brand = MenuBrand

Menu.Toggle = MenuToggle

export default Menu


