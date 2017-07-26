Poking Holes and Cutting Corners
=========

[Article](https://journals.aps.org/prx/pdf/10.1103/PhysRevX.7.021029)

[Demo](https://nkapolcs.github.io/poking-holes-demo/)

Integrate or build upon it for free in your personal or commercial projects. Don't republish, redistribute or sell "as-is". 

Read more here: [License](https://choosealicense.com/licenses/mit/)


© nkapolcs 2017

## Table of contents

- [Layout](#layout)
- [Media Queries](#media-queries)

## Layout

#### @include grid($display: flex, $flex-direction: null, $flex-wrap: null, $flex-flow: null, $justify-content: null, $align-items: null, $align-content: null, $gutter: null, $grid-type: skeleton);

Define the grid container.

| Arguments        | Default value | Values        | Description   |
| :---             | :---          | :---          | :---          |
| $display         | flex          | flex, inline-flex | generate a block-level or an inline-level grid container |
| $flex-direction  | null          | null, row, row-reverse, column, column-reverse |  |
| $flex-wrap       | null          | null, nowrap, wrap, wrap-reverse |  |
| $flex-flow       | null          | null, [row, row-reverse, column, column-reverse] [nowrap, wrap, wrap-reverse] | a shorthand for setting the flex-direction and flex-wrap properties |
| $justify-content | null          | null, flex-start, flex-end, center, space-between, space-around | defines the alignment along the main axis. |
| $align-items     | null          | null, flex-start, flex-end, center, baseline, stretch |  |
| $align-content   | null          | null, flex-start, flex-end, center, space-between, space-around, stretch |  |
| $gutter          | null          | null, [`<percentage>`](https://www.w3.org/TR/CSS21/syndata.html#percentage-units), [`<length>`](https://www.w3.org/TR/CSS21/syndata.html#length-units) | null is no margin of both ends of the grid. `<percentage>` generate a margin of both ends of the grid. `<length>` generate a margin of both ends of the grid (`<length>` is experimental stage). |
| $grid-type       | skeleton      | skeleton, margin-offset | the type of grid |

---

#### @include grid-col($col: null, $grid-columns: 12, $col-offset: null, $gutter: null, $condensed: false, $align-self: null, $flex-grow: 0, $flex-shrink: 1, $flex-basis: auto, $order: null, $grid-type: skeleton, $last-child: false);

Generate the grid columns.

The use of CSS calc() is experimental stage. If $col sets <number> or <width> and $gutter sets <length>, use CSS calc().

| Arguments        | Default value | Values        | Description   |
| :---             | :---          | :---          | :---          |
| $col          | null     | null, initial, [`<number>`](https://www.w3.org/TR/CSS21/syndata.html#numbers), auto, equal, none, breakpoint, [`<width>`](https://www.w3.org/TR/CSS21/visudet.html#the-width-property) | null is no set columns. `<number>` is number of columns. initial, auto, equal, none and breakpoint are preset columns. `<width>` is unit set columns (<width> is experimental stage). |
| $grid-columns | 12       | [`<number>`](https://www.w3.org/TR/CSS21/syndata.html#numbers) | the total number of columns in the grid. |
| $col-offset   | null     | null, [`<percentage>`](https://www.w3.org/TR/CSS21/syndata.html#percentage-units) | `<percentage>` offset a width of columns. |
| $gutter       | null     | null, [`<percentage>`](https://www.w3.org/TR/CSS21/syndata.html#percentage-units), [`<length>`](https://www.w3.org/TR/CSS21/syndata.html#length-units) | null is no margin between columns. `<percentage>` generate a margin of between columns. `<length>` generate a margin of between columns (`<length>` is experimental stage). |
| $condensed    | false    | true, false | cutting the top and bottom margins of the columns. |
| $align-self   | null     | null, auto, flex-start, flex-end, center, baseline, stretch |  |
| $flex-grow    | 0 *      | [`<number>`](https://www.w3.org/TR/CSS21/syndata.html#numbers) | grow relative to the rest of the columns in the grid |
| $flex-shrink  | 1 *      | [`<number>`](https://www.w3.org/TR/CSS21/syndata.html#numbers) | shrink relative to the rest of the columns in the grid |
| $flex-basis   | auto *   | [`<length>`](https://www.w3.org/TR/CSS21/syndata.html#length-units), auto | initial main size of the columns |
| $order        | null     | null, [`<integer>`](https://www.w3.org/TR/CSS21/syndata.html#numbers) | control the order in which appear in the grid container |
| $grid-type    | skeleton | skeleton, margin-offset | the type of grid |
| $last-child   | false    | 	true, false | adjust the last-child of the columns, if the $grid-type is `margin-offset` |

---

#### @include grid-margin($margin: null, $margin-top: null, $margin-right: null, $margin-bottom: null, $margin-left: null);

Generate the margins around grids.

| Arguments        | Default value | Values        | Description   |
| :---             | :---          | :---          | :---          |
| $margin        | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-top    | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-right  | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-bottom | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-left   | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |

---


#### @include grid-col-margin($margin: null, $margin-top: null, $margin-right: null, $margin-bottom: null, $margin-left: null);

Generate the margins around columns. Work as alias grid-margin().

| Arguments        | Default value | Values        | Description   |
| :---             | :---          | :---          | :---          |
| $margin        | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-top    | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-right  | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-bottom | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |
| $margin-left   | null | null, [`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width) |  |


## Media Queries

The media queries from mobile up until desktop all trigger at different points along the way

- mobile-portrait		: 320px !default;
- mobile-landscape	: 576px !default;
- tablet-portrait		: 768px !default;
- tablet-landscape	: 992px !default;
- desktop				    : 1200px !default;

| Arguments        | Min value ( x > ) | Max value ( x < ) |
| :---             | :---              | :---              |
| mobile-only                | 0 | mobile-landscap0 |
| mobile-portrait-only       | 0 | mobile-portrait |
| mobile-portrait-and-below  | 0 | mobile-portrait |
| mobile-portrait-and-up     | mobile-portrait | ∞ |
| mobile-landscape-only      | a | b |
| mobile-landscape-and-below | a | b |
| mobile-landscape-and-up    | a | b |
| a | a | b |
- 
-
- 
- tablet-only
- tablet-portrait-only
- tablet-portrait-and-below
- tablet-portrait-and-up
- tablet-landscape-only
- tablet-landscape-and-below
- tablet-landscape-and-up
- desktop-and-up
- desktop-and-below
- desktop-only
- retina


[`<percentage>`](https://www.w3.org/TR/CSS21/syndata.html#percentage-units)
[`<length>`](https://www.w3.org/TR/CSS21/syndata.html#length-units)
[`<number>`](https://www.w3.org/TR/CSS21/syndata.html#numbers)
[`<width>`](https://www.w3.org/TR/CSS21/visudet.html#the-width-property)
[`<integer>`](https://www.w3.org/TR/CSS21/syndata.html#numbers)
[`<margin-width>`](https://www.w3.org/TR/CSS21/box.html#value-def-margin-width)
