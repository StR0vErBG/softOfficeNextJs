import React from 'react';

const NavLinks = () => {
    return (
        <ul class="navigation">
    <li class="menu">Интрументи и железария</li>
    <ul class="submenu">
        <li><a href="">Акумулаторни комплекти</a></li>
        <li><a href="">Тест</a></li>
    </ul>

    <li class="menu">Градина</li>
    <ul class="submenu">
        <li>
            <a href="">Градински мебели</a>
        </li>
    </ul>

    <li class="menu">Кухня</li>
    <ul class="submenu">
        <li>
            <a href="">Кухненски мебели</a>
        </li>
    </ul>

    <li class="menu">Баня</li>
    <ul class="submenu">
        <li>
            <a href="">Мебели и огледала за баня</a>
        </li>
    </ul>

    <li class="menu">Отопление, Охлаждане и Вик</li>
    <ul class="submenu">
        <li>
            <a href="">Климатици</a>
        </li>
    </ul>

    <li class="menu">Подови и стенни покрития</li>
    <ul class="submenu">
        <li>
            <a href="">Плочки и лайсни</a>
        </li>
    </ul>


</ul>
    );
}

export default NavLinks;
