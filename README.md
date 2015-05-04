# card-depth.js
Add cards with depth. Material design accurate. 

# How to get started
Simply add card-depth.js to your code directory and import it to your HTML. 

# How to use
1. Find the element you want to make into a card. In this example, we'll use a div tag with some content in it.
```
<div>
  <p>I am content!</p>
</div>
```
2. Add "card" to the class name.
```
<div class="card">
  <p>I am content!</p>
</div>
```
3. Add your desired height effects. (consult the reference to learn about these)
```
<div class="card" z-default='20' z-hover='50'>
  <p>I am content!</p>
</div>
```
Here's an example: http://codepen.io/anon/pen/xbBNOe

4. By default, your card should now exist with a height of 100px and a margin of 25px. It will have a transition of .15s for shadows by default. Check the reference to learn how to turn them off.

#Reference
Added HTML attributes: z, z-default, z-hover, z-click, no-margin, no-padding, no-transition, no-border-radius, no-height

`z`: used inside of code, user cannot play with this variable as it constantly changes.

`z-default`: the z height (in pixels) when user is not hovering or clicking on element.

`z-hover`: the z height (in pixels) when user is hovering element.

`z-click`: the z height (in pixels) when user is clicking on element.

`no-margin`: takes no value. Simply a flag indicating to not apply the default 25px margin to this card.

`no-padding`: takes no value. Simply a flag indicating to not apply the default 10px padding to this card.

`no-transition`: takes no value. It is a flag indicating to not apply the default .15s material transition with shadow.

`no-height`: takes no value. It is a flag indicating to not apply the default height of 100px to this card.

`no-border-radius`: takes no value. It is a flag indicating to not apply the default border-radius of 2px.

