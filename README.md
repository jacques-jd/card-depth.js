# card-depth.js
Add cards with depth. Material design accurate. 

# How to get started
Simply add card-depth.js to your code directory and import it to your HTML. 
![code](http://i.imgur.com/ESC0NkL.png)

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
4. Add desired CSS to make box look pretty, have transitions, etc. Here's an example: http://codepen.io/anon/pen/KwEYQa

#Reference
Added HTML attributes: z, z-default, z-hover, z-click

z: used inside of code, user cannot play with this variable as it constantly changes.
z-default: the z height (in pixels) when user is not hovering or clicking on element.
z-hover: the z height (in pixels) when user is hovering element.
z-click: the z height (in pixels) when user is clicking on element.
